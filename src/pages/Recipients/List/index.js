import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';

export default function List() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function getRecipients() {
      try {
        const response = await api.get('recipients');

        setRecipients(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }

    getRecipients();
  }, []);

  return (
    <>
      <Toolbar>
        <div>
          <span>Recipient Management</span>
          <aside>
            <Link to="/recipient/new">NEW</Link>
            <input type="search" placeholder="Search" />
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <DefaultTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Recipient</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>{recipient.city}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
    </>
  );
}
