import React,{Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
const BoxObject=[
    {
        src:'https://www.docplanner.com/images/warsaw.png',
        title:'Warsaw',
        alt:'city image'
    },
    {
        src:'https://www.docplanner.com/images/barcelona.png',
        title:'Barcelona',
        alt:'city image'
    },
    {
        src:'https://www.docplanner.com/images/istanbul.png',
        title:'Istanbul',
        alt:'city image'
    },
    {
        src:'https://www.docplanner.com/images/rome.png',
        title:'Rome',
        alt:'city image'
    },
    {
        src:'https://www.docplanner.com/images/mexico-city.png',
        title:'Mexico City',
        alt:'city image'
    },
    {
        src:'https://www.docplanner.com/images/curitiba.png',
        title:'Curitiba',
        alt:'city image'
    }
]
class Offices extends Component {
    render() { 
        return ( 
            <Grid style={{marginTop:'5%'}}>
                <Row>
                    <Col md={4}></Col>
                    <Col md={6}>
                        <h1 style={{color:'rgb(0,204,177)'}}>Improve the lives of millions.</h1>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col style={{marginLeft:'5%',marginTop:'-2%',color:'rgb(0,204,177)'}}md={6}>
                    <h1>Change yours forever</h1>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                <Col md={3}></Col>
                <Col style={{marginTop:'2%',marginBottom:'2%'}}md={7}>
                <p>
                    More than 500 team mates share our same vision, goals and passion .
                    With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
                    Curitiba, our search for great talent never stops.
                </p>
                </Col>
                <Col md={2}></Col>
                </Row>
                <Row>
                    <Col>  
                    {BoxObject.map((box,i)=><Col md={4}>
                        <img src={box.src} alt={box.alt}/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h3>{box.title}</h3>
                            <Button style={{width: '39%',marginRight:'15%',height:'42px',marginTop:'2%'}}>SEE OPENINNGS</Button>
                        </div>
                        </Col>
                    )}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
 
export default Offices;
