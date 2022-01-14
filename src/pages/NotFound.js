import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'> 
        <Alert className='d-flex justify-content-center' variant={'danger'}>
          Página não encontrada
        </Alert>
      </div>
    )
  }
}

export default NotFound;
