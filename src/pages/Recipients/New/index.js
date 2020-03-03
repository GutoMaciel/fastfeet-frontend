import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function New() {
  return (
    <>
      <Toolbar>
        <div>
          <span>Recipient Subscription</span>
          <aside>
            <Link className="prevPage" to="/recipients">
              BACK
            </Link>
            <button type="submit">SAVE</button>
          </aside>
        </div>
      </Toolbar>
    </>
  );
}
