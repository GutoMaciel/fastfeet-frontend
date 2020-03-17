import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';

export default function New() {
  const [addressName, setAddressName] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState(0);
  const [addressComplement, setAddressComplement] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');

  // handleSubmit
  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
  }) {
    try {
      await api.post(`/recipients`, {
        name,
        street,
        number,
        complement,
        city,
        state,
        zip,
      });

      toast.success('This address was subscribed with success.');
      history.push('/recipients');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <>
      <Toolbar>
        <div>
          <span>Recipient Subscription</span>
          <aside>
            <Link className="prevPage" to="/recipients">
              BACK
            </Link>
            <button type="submit" form="recipient-form">
              SAVE
            </button>
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <Form id="recipient-form" onSubmit={handleSubmit}>
          <Input
            label="Recipient name"
            name="name"
            type="text"
            placeholder="Ludwig Van Beethoven"
            value={addressName}
            onChange={e => setAddressName(e.target.value)}
          />
          <Input
            label="Street"
            name="street"
            type="text"
            placeholder="Rua Beethoven"
            value={addressStreet}
            onChange={e => setAddressStreet(e.target.value)}
          />
          <Input
            label="Number"
            name="number"
            type="number"
            placeholder="1729"
            value={addressNumber}
            onChange={e => setAddressNumber(e.target.value)}
          />
          <Input
            label="Complement"
            name="complement"
            type="text"
            placeholder="Officce"
            value={addressComplement}
            onChange={e => setAddressComplement(e.target.value)}
          />

          <Input
            label="City"
            name="city"
            type="text"
            placeholder="Diadema"
            value={addressCity}
            onChange={e => setAddressCity(e.target.value)}
          />

          <Input
            label="State"
            name="state"
            type="text"
            placeholder="São Paulo"
            value={addressState}
            onChange={e => setAddressState(e.target.value)}
          />

          <Input
            label="Zip"
            name="zip"
            type="number"
            placeholder="85890000"
            value={addressZip}
            onChange={e => setAddressZip(e.target.value)}
          />
        </Form>
      </ActionContent>
    </>
  );
}
