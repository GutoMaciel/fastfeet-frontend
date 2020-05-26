import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';

export default function Edit() {
  // const [deliverymanName, setDeliverymanName] = useState('');
  // const [deliverymanEmail, setDeliverymanEmail] = useState('');
  const [deliverymanData, setDeliverymanData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await api.get(`deliveryman/${id}`);

      const initialData = {
        name: response.data.name,
        email: response.data.email,
      };

      setDeliverymanData(initialData);
    }
    getData();
  }, [id]);

  async function handleSubmit({ name, email }) {
    try {
      await api.put(`/deliveryman/${id}`, {
        name,
        email,
      });

      toast.success('Deliveryman updated');
      history.push('/deliverymans');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <>
      <Toolbar>
        <div>
          <span>Deliveryman Subscription</span>
          <aside>
            <Link className="prevPage" to="/deliverymans">
              BACK
            </Link>
            <button type="submit" form="deliveryman-form">
              SAVE
            </button>
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <Form
          initialData={deliverymanData}
          id="deliveryman-form"
          onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Ludwig Van Beethoven"
            // value={deliverymanName}
            // onChange={e => setDeliverymanName(e.target.value)}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            placeholder="beeth@mail.com"
            // value={deliverymanEmail}
            // onChange={e => setDeliverymanEmail(e.target.value)}
          />
        </Form>
      </ActionContent>
    </>
  );
}
