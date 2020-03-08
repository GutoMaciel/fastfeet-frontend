import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';

export default function List() {
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function getDeliverymans() {
      try {
        const response = await api.get('deliveryman');

        setDeliverymans(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }

    getDeliverymans();
  }, []);

  return (
    <>
      <Toolbar>
        <div>
          <span>Deliverymans Management</span>
          <aside>
            <Link to="/deliveryman/new">NEW</Link>
            <input type="search" placeholder="Search" />
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <DefaultTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td>{deliveryman.avatar}</td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
    </>
  );
}
