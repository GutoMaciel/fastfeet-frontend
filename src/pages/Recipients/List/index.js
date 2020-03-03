import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function List() {
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
    </>
  );
}
