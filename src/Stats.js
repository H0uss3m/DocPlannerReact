import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

const BoxObject=[
    {
    src:'https://www.docplanner.com/img/flag.png',
    alt:'flag',
    title:'Leader in 10 countries',
    paragraph:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina, and Chile'
    },
    {
    src:'https://www.docplanner.com/img/visits.png',
    alt:'validLogo',
    title:'1 million appointments',
    paragraph:'booked last month'   
    },
    {
    src:'https://www.docplanner.com/img/patients.png',
    alt:'persons',
    title:'30 million unique patients',
    paragraph:'visit us every month'   
   },
    {
    src:'https://www.docplanner.com/img/doctors.png',
    alt:'community',
    title:'35 000 active doctors',
    paragraph:'trust in our solutions'   
       }
]
class Stats extends Component{
    render()
    {
        return (
            <Grid style={{marginTop:'5%',
            backgroundImage:'linear-gradient(-45deg,rgba(0,204,177,.01) 5%,rgba(61,199,223,.1))',
            backgroundRepeat:'no-repeat'}}>
                <Row>
                <Col md={6}>
                <h1>The world's biggest healthcare platform</h1>
                <h5 style={{marginTop:'5%',color:'grey',opacity:'0.7'}}>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</h5>
                </Col>
                <Col style={{display:'flex',width: '50%',flexWrap: 'wrap',justifyContent: 'space-around'}} md={6}> 
                    
                    {BoxObject.map((box,i)=>
                    <div style={{width:'34%'}} key={i} >
                        <img src={box.src} alt={box.alt}/>
                        <h3>{box.title}</h3>
                        <p>{box.paragraph}</p>
                    </div>)
                    }
                </Col>
                </Row>
            </Grid>

        );
    }
}

export default Stats;