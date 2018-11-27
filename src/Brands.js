import React,{Component} from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import adressLogo from './logo/adressLogo.png';

class Brands extends Component {
render(){ 
        return (
            <Grid style={{marginTop:'5%'}}>
                <Row>
                    <Col md={3}>
                    <h1 style={{color:'rgb(0,204,177)'}}>We are a global company with local culture</h1>
                    </Col>
                    
                    <Col md={9}> 
                    <Row style={{marginTop: '5%',fontSize: '127%'}}>
                            <Col md={3}>
                                <img src={adressLogo}alt="docplannerLogo"/>
                                <a>ZnanyLeKarez</a>
                            </Col>
                            <Col md={3}>
                                <img src={adressLogo} alt="docplannerLogo"/>
                                <a>DoctoraCol </a></Col>
                            <Col md={3}>
                                <img src={adressLogo} alt="docplannerLogo"/>
                                <a>MioDottore</a></Col>
                            <Col md={3}>
                                <img src={adressLogo} alt="docplannerLogo"/>
                                <a>DoktorTakvimi</a></Col>
                            <Col md={3}>
                                <img src={adressLogo} alt="docplannerLogo"/>
                                <a>ZnanyLeKare</a>
                            </Col>
                   </Row>
                    </Col>
                </Row>
            </Grid>
          );
    }
}
 
export default Brands;