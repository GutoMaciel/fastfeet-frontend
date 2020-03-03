import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function List() {
  return (
    <>
      <Toolbar>
        <div>
          <span>Packages Management</span>
          <aside>
            <Link to="/pack/new">NEW</Link>
          </aside>
        </div>
      </Toolbar>
    </>
  );
}
