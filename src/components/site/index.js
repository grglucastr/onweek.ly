import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Home from './Home';


const index = () => {
  return(
    <Router>
      <div>
        <SiteHeader />
        <div>
          <Home />
        </div>
      </div>
    </Router>
    
  )
}


export default index;