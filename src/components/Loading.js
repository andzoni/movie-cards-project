import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'> 
        <Alert className='d-flex justify-content-center' variant={'dark'}>
          Loading...
        </Alert>
      </div> 
    );
  }
}

export default Loading;
