import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';
// import ActionMenu from '~/components/ActionMenu';
import ProblemModal from '~/components/ProblemModal';

export default function List() {
  const [problems, setProblems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [problemId, setProblemId] = useState('');
  const [problemDetail, setProblemDetail] = useState({});

  useEffect(() => {
    async function getProblems() {
      try {
        const response = await api.get('deliveryproblems');

        setProblems(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }
    getProblems();
  }, []);

  // function handleProblemChange(id) {}

  // function handleDetails(problem) {
  //   setProblemDetail(problem);
  //   setVisible(true);
  // }

  return (
    <>
      <Toolbar>
        <div>
          <span>Problems</span>
        </div>
      </Toolbar>
      <ActionContent>
        <DefaultTable>
          <thead>
            <tr>
              <th>Delivery ID</th>
              <th>Problem</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id}>
                <td>#{problem.package_id}</td>
                <td>{problem.description}</td>
                <td>
                  <button
                    type="button"
                    problem={problemDetail}
                    id={problem.id}
                    onClick={() => {
                      setProblemDetail(problem);
                      // setProblemId(problem.package_id);
                      setVisible(true);
                    }}
                  >
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
      <ProblemModal
        visible={visible}
        // problem_id={problemId}
        hide={() => setVisible(false)}
        problem={problemDetail}
      />
      {/* <ActionMenu
        visible={visible}
        problem_id={problemId}
        hide={() => setVisible(false)}
        handleProblemChange={handleProblemChange}
      /> */}
    </>
  );
}
