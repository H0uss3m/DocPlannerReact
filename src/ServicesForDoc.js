import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class ServicesForDoc extends Component {
    render(){
        return(
            <Grid style={{ borderRadius:'25px', backgroundColor:'rgb(61,131,223)',width:'100%',display:'flex',overflow:'hidden',marginTop:'2%'}}>
                <Row style={{color:'white'}}>
                <Col style={{opacity:'0.7'}} md={12}>
                        <h3>For Doctors</h3> 
                </Col>
                <Col md={12}>
                        <h4> Save time managing visits and cut no-shows by half</h4>
                </Col>
                
                <Col md={12}>
                    <figure >
                        <img style={{width: '100%',marginLeft:'35%',marginTop:'7%'}} src="https://www.docplanner.com/img/screen-saas@2x.png" alt="Docpalnner_doctor's_main_page"/>
                    </figure>
                </Col>
                </Row>
            </Grid>
        );
    }
}

export default ServicesForDoc;
