import React ,{Component} from 'react';
import {Col,Row,Grid} from 'react-bootstrap';
class DescreptionBox extends Component {
    render(){
        return (<Grid style={{marginTop:'5%'}}>
            <Row>
                <Col md={6}></Col>
                <Col md={3}>
                    <img src="https://www.docplanner.com/img/sygnet.png" alt="docplannerSygnet"/>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col md={2}></Col>
                <Col md={9} style={{color:'rgb(0,191,165)'}}>
                    <h1>Making the healthcare experience more human</h1>    
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row style={{marginTop:'2%'}}>
                <Col style={{padding: '5%'}} md={6}>
                    <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
                </Col>
                <Col style={{padding: '5%'}} md={6}>
                    <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
                </Col>
            </Row>
        </Grid>
        );
    }
}

export default DescreptionBox;
