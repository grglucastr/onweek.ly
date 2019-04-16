import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import LoginForm from './LoginForm';

import './styles.css'

const Home = () =>  {
  return(

    <div className="home-container">
      <div className="d-none d-sm-none d-md-block bg-pic">  </div>
      <div className="home-container-item">
        <div className="mt-1">
          <LoginForm  showHeader={true}/>
        </div>
        <div className="mt-5 text-center" >
          <h2 >Not a member yet?</h2>
          <Button variant="success" className="mt-2">Create Account</Button>
        </div>
      </div>
    </div>

    
    
  )
}

export default Home;