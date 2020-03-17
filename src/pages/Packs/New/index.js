import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
// import AsyncSelect from 'react-select/async';
import Select from 'react-select/async';

import history from '~/services/history';

import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';

const schema = Yup.object().shape({
  recipient_id: Yup.number().required(),
  deliveryman_id: Yup.number().required(),
  product: Yup.string().required(),
});

export default function New() {
  const [recipientName, setRecipientName] = useState('');
  const [recipientSelected, setRecipientSelected] = useState(null);
  const [deliverymanName, setDeliverymanName] = useState(null);
  const [deliverymanSelected, setDeliverymanSelected] = useState(null);
  const [product, setProduct] = useState(null);

  async function loadRecipients() {
    const response = await api.get(`recipients?name=${recipientName}`);

    return response.data.rows;
  }

  async function loadDeliverymans() {
    const response = await api.get(`deliveryman?name=${deliverymanName}`);

    return response.data.rows;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await schema.validate(
        {
          recipient_id: recipientSelected,
          deliveryman_id: deliverymanSelected,
          product,
        },
        {
          abortEarly: false,
        }
      );
    } catch (err) {
      err.inner.forEach(error => {
        toast.error(error.message);
      });
      return;
    }

    try {
      await api.post('delivery', {
        recipient_id: recipientSelected,
        deliveryman_id: deliverymanSelected,
        product,
      });
      toast.success('Delivery subscribed with success.');
      history.push('/packs');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <>
      <Toolbar>
        <div>
          <span>Package Subscription</span>
          <aside>
            <Link className="prevPage" to="/packs">
              BACK
            </Link>
            <button type="submit">SAVE</button>
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <form id="delivery-form" onSubmit={handleSubmit}>
          <label htmlFor="DeliveryTitle">New Delivery</label>
          <Select
            placeholder="Recipient"
            DefaultValue={null}
            name="recipient_id"
            loadOptions={loadRecipients}
            getOptionValue={option => option.id}
            getOptionLabel={option => option.name}
            onInputChange={s => setRecipientName(s.id)}
            onChange={o => setRecipientSelected(o.id)}
          />

          <Select
            placeholder="Deliveryman"
            DefaultValue={null}
            name="deliveryman_id"
            loadOptions={loadDeliverymans}
            getOptionValue={option => option.id}
            getOptionLabel={option => option.name}
            onInputChange={s => setDeliverymanName(s.id)}
            onChange={o => setDeliverymanSelected(o.id)}
          />

          <input
            className="Product"
            name="product"
            placeholder="Product"
            value={product}
            onChange={e => setProduct(e.target.value)}
          />
        </form>
      </ActionContent>
    </>
  );
}
