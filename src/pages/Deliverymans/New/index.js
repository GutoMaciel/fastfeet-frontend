import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function New() {
  return (
    <>
      <Toolbar>
        <div>
          <span>Deliveryman Subscription</span>
          <aside>
            <Link className="prevPage" to="/deliverymans">
              BACK
            </Link>
            <button type="submit">SAVE</button>
          </aside>
        </div>
      </Toolbar>
    </>
  );
}
