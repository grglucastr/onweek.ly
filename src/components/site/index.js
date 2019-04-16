import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Home from './Home';

import './styles.css';

const index = () => {
  return(
    <Router>
      <div style={{height: '100%'}}>
        <SiteHeader />
        <section className="site-main-section">
          <Home />
        </section>
      </div>
    </Router>
    
  )
}


export default index;