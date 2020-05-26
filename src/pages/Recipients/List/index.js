import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';

export default function List() {
  const [name, setName] = useState('');
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function getRecipients() {
      try {
        const response = await api.get('recipients', {
          params: { name },
        });

        setRecipients(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }

    getRecipients();
  }, [name]);

  // async function handleDelete(id) {
  //   try {
  //     await api.delete(`/recipient/${id}`);

  //     const updatedList = recipients.filter(recipient => recipient.id != id);

  //     setRecipients(updatedList);

  //     toast.success('Recipient deleted.');
  //   } catch (err) {
  //     toast.error(err.response.data.error);
  //   }
  //  }

  return (
    <>
      <Toolbar>
        <div>
          <span>Recipient Management</span>
          <aside>
            <Link to="/recipient/new">NEW</Link>
            <input
              type="search"
              placeholder="Search"
              onChange={e => setName(e.target.value)}
            />
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
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city},{' '}
                  {recipient.state}
                </td>
                <td>
                  <Link to={`recipient/edit/${recipient.id}`}>Edit</Link>
                </td>
                {/* <td>
                  <button type="button" onClick={() => handleDelete(recipient.id)}>
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
    </>
  );
}
