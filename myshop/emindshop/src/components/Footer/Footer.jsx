import React from 'react';
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {Link} from 'react-router-dom'
const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg = '4'>
        <div className='logo'>
          <div>
            <h1 className='text-white'>MyShop</h1>
          </div>

          <p className="footer_text mt-4">
            
          </p>
        </div>
        </Col>

        <Col lg = '3'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Cat</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to ='#'>Mobile Phone</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='#'>Modern Cookware</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='#'>Kitchen Utensils</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='#'>Knife</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg = '2'>
        <div className="footer_quick-links">
            <h4 className="quick_links-title">Useful Linnks</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to ='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to ='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg = '3'>
        <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <span className='items'><i class="ri-map-pin-fill"></i></span>
                <p>123 Duong Nguyen Hue, Quan 1, TP HCM</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <span className='iitems'><i class="ri-phone-line"></i></span>
                <p>+0123456789</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <span className='iiitems'><i class="ri-mail-line"></i></span>
                <p>abc12345@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg = '12'>
          <p className="footer_copyright">Copyright {year} developed by MyShop Rahman. All rights reserved </p>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;