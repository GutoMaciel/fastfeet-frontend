import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';

export default function New() {
  const [deliverymanName, setDeliverymanName] = useState('');
  const [deliverymanEmail, setDeliverymanEmail] = useState('');

  async function handleSubmit({ name, email }) {
    try {
      await api.post(`/deliveryman`, {
        name,
        email,
      });

      toast.success('Deliveryman Subscribed');
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
        <Form id="deliveryman-form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Ludwig Van Beethoven"
            value={deliverymanName}
            onChange={e => setDeliverymanName(e.target.value)}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            placeholder="beeth@mail.com"
            value={deliverymanEmail}
            onChange={e => setDeliverymanEmail(e.target.value)}
          />
        </Form>
      </ActionContent>
    </>
  );
}
