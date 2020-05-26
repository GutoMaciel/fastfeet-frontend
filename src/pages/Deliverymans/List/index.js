import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';
// import { useHistory } from 'react-router-dom';


import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';
import ActionMenu from '~/components/ActionMenu';
// import {ActionsMenu} from '~/components/ActionsMenu';
// import Avatar from '~/components/Avatar';

export default function List() {
  const [name, setName] = useState('');
  const [deliverymans, setDeliverymans] = useState([]);
  const [visible, setVisible] = useState(false);
  const [deliverymanId, setDeliverymanId] = useState(null);

  // const history = useHistory();


  useEffect(() => {
    async function getDeliverymans() {
      try {
        const response = await api.get('deliveryman', {
          params: { name },
        });

        setDeliverymans(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }

    getDeliverymans();
  }, [name]);

  async function handleDelete(id) {
   try {
     await api.delete(`/deliveryman/${id}`);

     const updatedList = deliverymans.filter(deliveryman => deliveryman.id != id);

     setDeliverymans(updatedList);

     toast.success('Deliveryman deleted.');
   } catch (err) {
     toast.error(err.response.data.error);
   }
  }

  return (
    <>
      <Toolbar>
        <div>
          <span>Deliverymans Management</span>
          <aside>
            <Link to="/deliveryman/new">NEW</Link>
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
              {/* <th>Photo</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                {/* <td>
                  <Avatar />
                </td> */}
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <Link to={`deliveryman/edit/${deliveryman.id}`}>Edit</Link>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(deliveryman.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
      {/* <ActionMenu
        visible={visible}
        route="deliveryman"
        deliveryman_id={deliverymanId}
        hide={() => setVisible(false)}
      /> */}
    </>
  );
}
