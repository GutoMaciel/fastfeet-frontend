import React from 'react';
import { Link } from 'react-router-dom';
// import api from '~/services/api';

import Toolbar from '~/components/Toolbar';

export default function New() {
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
    </>
  );
}
