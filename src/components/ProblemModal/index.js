import React, { useRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Modal } from './styles';

export default function ProblemModal({visible, hide, problem, problem_id}) {
  // Schema Validation

  const [problems, setProblems] = useState('');

  const ref = useRef();

  useEffect(() => {
    async function getProblemInfo() {
      if (visible) {
        const response = await api.get(`/package/${problem_id}/problems`);
        const { problem } = response.data;

        setProblems(problem);
      }
    }
    getProblemInfo();
    // console.log(deliveryProblem)
  }, [problem_id, visible]);

  // Cancel the pack from the modal
  async function handleDelete(id) {
    try {
      await api.delete(`/deliveryproblems/${id}/cancel`);

      // const updatedList = problems.filter(problem => problem.id != id);

      // setProblems(updatedList);

      toast.success('Deliveryman deleted.');
      history.push('/');
    } catch (err) {
      toast.error(err.response.data.error);
    }
   }

  function handleOverlayClick(event) {
    if (event.target === ref.current) {
      hide();
    }
  }

  return (
    <Container visible={visible} ref={ref} onClick={handleOverlayClick}>
      <Modal visibleEffect>
        <strong>Problem Description</strong>
        <p>{problem.description}</p>
        <p>Package Id: {problem.package_id}</p>
        {/* <p>Product: {problem.packageProduct}</p>
        <p>Start Date: {problem.start_date}</p>
        <p>Recipient: {problem.recipient_name}</p> */}
        <button type="button" onClick={() => handleDelete(problem.id)}>
                    Cancel
        </button>
      </Modal>
    </Container>
  )
}
