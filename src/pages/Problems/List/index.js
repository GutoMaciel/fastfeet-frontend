import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';

export default function List() {
  const [problems, setProblems] = useState([]);

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
              <th>Delivery</th>
              <th>Problem</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.id}>
                <td>#{problem.package_id}</td>
                <td>{problem.description}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
    </>
  );
}
