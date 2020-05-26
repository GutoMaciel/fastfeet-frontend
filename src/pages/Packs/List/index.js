import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';
import DefaultTable from '~/components/DefaultTable';

export default function List() {
  const [deliverys, setDeliverys] = useState([]);
  const [product, setProduct] = useState('');
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getPacks() {
      try {
        const response = await api.get('delivery', {
          params: { product },
        });

        setDeliverys(response.data);
      } catch (err) {
        toast.error('Error');
      }
    }

    getPacks();
  }, [product]);

  return (
    <>
      <Toolbar>
        <div>
          <span>Packages Management</span>
          <aside>
            <Link to="/pack/new">NEW</Link>
            <input
              type="search"
              placeholder="Search product"
              onChange={e => setProduct(e.target.value)}
            />
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <DefaultTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Recipient</th>
              <th>Deliveryman</th>
              <th>City</th>
              <th>State</th>
              {/* <th>Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliverys.map(delivery => (
              <tr key={delivery.id}>
                <td>#{delivery.id}</td>
                <td>{delivery.product}</td>
                <td>{delivery.recipient.name}</td>
                <td>{delivery.deliveryman.name}</td>
                <td>{delivery.recipient.city}</td>
                <td>{delivery.recipient.state}</td>
                {/* <td>Status</td> */}
                <td>
                  <Link to={`pack/${delivery.id}`}>More</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </DefaultTable>
      </ActionContent>
    </>
  );
}
