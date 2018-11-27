import React,{Component} from 'react';
import {Grid,Row,Col,DropdownButton,MenuItem} from 'react-bootstrap';
const CountryList= [{name:'Poland'},
 {name:'Turkey'},
 {name:'Spain'},
 {name:'Italy'},
 {name:'Mexico'},
 {name:'Brazil'},
 {name:'Argentina'},
 {name:'Chile'}];
class ServicesForPatients extends Component {
    render(){
        return (
            <Grid style={{ borderRadius:'25px', backgroundColor:'rgb(0,204,177)',width:'100%',display:'flex',overflow:'hidden'}}>
                <Row style={{color:'white'}}>
                <Col style={{opacity:'0.7'}} md={12}>
                        <h3>For patients</h3> 
                </Col>
                <Col md={12}>
                        <h4> Find a doctor, book a visit and solve any health-related doubt </h4>
                </Col>
                
                <Col md={12}>
                        <DropdownButton title='CHOOSE COUNTRY'>
                        {CountryList.map((country,i)=><MenuItem eventKey={i}>{country.name}</MenuItem>)}
                        </DropdownButton>
                    <figure >
                        <img style={{width: '100%',marginLeft:'35%'}} src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="Docplanner_patient's_main_page"/>
                    </figure>
                </Col>
                </Row>
            </Grid>
        );
    }
}

export default ServicesForPatients;
