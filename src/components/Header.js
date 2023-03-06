import React, { useState } from 'react';
import { MDBIcon} from 'mdbreact';


import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <MDBNavbar expand='lg' light style={{backgroundColor: "#541b1b"}} >
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
            {/* <img src="images/logo.jpg" alt="logo" style={{height: "30px"}} /> */}
            </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='#navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShow(!show)}
        >
          <MDBIcon icon='tabs' fas />
        </MDBNavbarToggler>
        <MDBCollapse  show={show} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/' style={{color: "#abc"}}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/addBlog" style={{color: "#abc"}}>AddBlog</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/about" style={{color: "#abc"}}>About</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}