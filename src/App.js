import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Dan from './app/assets/img/Dan.jpg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar dark color='primary' sticky='top' expand='md' align='left'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={Dan} alt='Portfolio Image' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm Ready!
    </div>
  );
}

export default App;
