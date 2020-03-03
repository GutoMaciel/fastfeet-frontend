import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function List() {
  return (
    <>
      <Toolbar>
        <div>
          <span>Deliverymans Management</span>
          <aside>
            <Link to="/deliveryman/new">NEW</Link>
          </aside>
        </div>
      </Toolbar>
    </>
  );
}
