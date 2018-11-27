import React,{Component} from 'react';
import ServicesForDoc from './ServicesForDoc';
import ServicesForPatients from './ServicesForPatients';
import {Grid,Col,Row} from 'react-bootstrap';
class Services extends Component {
    render(){
        return(
        <Grid style={{marginTop:'5%'}}>
            <Row>
                <Col md={6}>
                    <ServicesForPatients />
                </Col>
                <Col md={6}>
                    <ServicesForDoc />
                </Col>
            </Row>
        </Grid>
        );
    }
}

export default Services;