import React,{Component} from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
class Footer extends Component {
    render(){
        return (
            <Grid style={{borderTop: '1px solid rgba(196,196,196,0.7)',
            color: 'black',
            opacity: '.7',
            marginTop:'5%'}}>
            <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <p>We are leaders in 8 countries:
                <a className="office-list-country-adress" href="#">Poland </a>
                <a className="office-list-country-adress" href="#">Turkey </a> 
                <a className="office-list-country-adress" href="#">Spain </a> 
                <a className="office-list-country-adress" href="#">Italy </a> 
                <a className="office-list-country-adress" href="#">Mexico </a> 
                <a className="office-list-country-adress" href="#">Brazil </a> 
                <a className="office-list-country-adress" href="#">Argentina </a> 
                <a className="office-list-country-adress" href="#">Chile</a>
                </p>
            </Col>
            <Col md={3}></Col>
            </Row>
            <Row>            
           
            <Col md={11} style={{textAlign:'center'}}>
                <p>
                This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
                www.docplanner.com © 2018
                </p>
            </Col>
            
            </Row>
        </Grid>
        );}

}

export default Footer ;
