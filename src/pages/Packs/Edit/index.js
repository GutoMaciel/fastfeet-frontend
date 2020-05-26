import React, { useState, useEffect } from 'react';
// import * as Yup from 'yup';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AsyncSelect from 'react-select/async';

import history from '~/services/history';

import api from '~/services/api';

import Toolbar from '~/components/Toolbar';
import ActionContent from '~/components/ActionContent';

// const schema = Yup.object().shape({
//   recipient_id: Yup.number().required(),
//   deliveryman_id: Yup.number().required(),
//   product: Yup.string().required(),
// });

export default function Edit() {
  const [recipient_id, setRecipientId] = useState(0);
  const [deliveryman_id, setDeliverymanId] = useState(0);

  const [inputRecipient, setRecipientInput] = useState('');
  const [inputDman, setDmanInput] = useState('');
  const [inputProduct, setProductInput] = useState('');

  const [deliveryData, setDeliveryData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await api.get(`delivery/${id}`);

      const initialData = {
        deliveryman_id: response.data.deliveryman.id,
        recipient_id: response.data.recipient.id,
        product: response.data.product,
      };

      // console.log(initialData);

      setDeliveryData(initialData);
    }
    getData();
  }, [id]);



  async function loadRecipients(inputValue) {
    try {
      const response = await api.get('recipients');

      const options = response.data.map((recipient) => ({
        ...recipient,
        value: recipient_id,
        label: recipient.name,
      }));

      return options.filter((d) =>
        d.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      return [];
    }
  }

  async function loadDeliverymans(inputValue) {
    try {
      const response = await api.get('deliveryman');

      const options = response.data.map((deliveryman) => ({
        ...deliveryman,
        value: deliveryman_id,
        label: deliveryman.name,
      }));

      return options.filter((f) =>
        f.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      return [];
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/delivery/${id}`, {
        deliveryman_id: inputDman,
        recipient_id: inputRecipient,
        product: inputProduct,
      });

      toast.success('Success.')
      history.push('/packs');

    } catch (error) {
      toast.error('Error.')
    }
  }

  const newDeliverData = {
    recipientId: inputRecipient,
    deliverymanId: inputDman,
    product: inputProduct,
  };

  return (
    <>
      <Toolbar>
        <div>
          <span>Package Subscription</span>
          <aside>
            <Link className="prevPage" to="/packs">
              BACK
            </Link>
            <button type="submit" form="delivery-form">SAVE</button>
          </aside>
        </div>
      </Toolbar>
      <ActionContent>
        <form
          id="delivery-form"
          initialData={deliveryData}
          data={newDeliverData}
          onSubmit={handleSubmit}>
            <label htmlFor="DeliveryTitle">New Delivery</label>
            <AsyncSelect
              placeholder="Recipient"
              loadOptions={(inputValue) => loadRecipients(inputValue)}
              onChange={(selectedOption) => setRecipientInput(selectedOption.id)}
              defaultOptions
              name="recipient_id"
              cacheOptions
            />


            <AsyncSelect
              placeholder="Deliveryman"
              loadOptions={(inputValue) => loadDeliverymans(inputValue)}
              onChange={(selectedOption) => setDmanInput(selectedOption.id)}
              defaultOptions
              name="deliveryman_id"
              cacheOptions
            />

            <input
              className="Product"
              name="product"
              placeholder="Product"
              type="text"
              value={inputProduct}
              onChange={e => setProductInput(e.target.value)}
            />
        </form>
      </ActionContent>
    </>
  );
}
