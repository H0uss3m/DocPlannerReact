import React,{Component} from 'react';
import {Grid,NavDropdown,Nav, Row,Col,MenuItem} from  'react-bootstrap';

class NavBar extends Component {
  render() {
    return (<Grid style={{marginTop:'5%'}}>
              <Row>
              <Col md={8}>
                <a href="#home">
                <img 
                style={{width:'35%'}}
                src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
                </a>
              </Col>
              <Col md={4} style={{display: 'flex',justifyContent: 'space-evenly'}}>
                <a href="#">
                  About us
                </a>
                <a href="#">
                  Career
                </a>    
            <NavDropdown style={{width:'35%',listStyleType:'none'}} title="Departments">
              <MenuItem eventKey="1">Marketing & PR</MenuItem>
              <MenuItem eventKey="2">Customer Success & Sales</MenuItem>
              <MenuItem eventKey="3">IT,Product,Design & UX</MenuItem>
              <MenuItem eventKey="4">Finance & Administration</MenuItem>
              <MenuItem eventKey='5'>HR & More</MenuItem>
            </NavDropdown>
            
          </Col>
          </Row>
      </Grid>);
  }
}

export default NavBar;
