import React from 'react';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function List() {
  return (
    <>
      <Toolbar>
        <div>
          <span>Problems</span>
          <aside>
            <p>Actions</p>
          </aside>
        </div>
      </Toolbar>
    </>
  );
}
