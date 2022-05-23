import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Medini from './medini.jpeg'
import './People.css';

function People() {
    return (
        <>
        <div style={{ padding: "56vh 0 3vh 3vw", display: "flex", flexDirection: "column", textAlign: "left", justifyContent: 'flex-start', alignItems: 'baseline', backgroundColor: "#dbe8ff" }}>
            <h2 style={{ fontSize: "10vw", color: "#071736" }}>meet the team.</h2>
            <h4 style = {{fontSize:"2vw", fontWeight:"300", color:"#071736", paddingTop:"1vh"}}>We are students of Ashoka University, tackling misinformation and social media analysis.</h4>
        </div>
        <div style={{ display: "flex", flexDirection: "center", justifyContent: 'center', alignItems: 'baseline', backgroundColor: "#c7dbff" }}>
            <div style={{ display: "flex", flexDirection: "center", marginTop: "7vh", marginBottom: "7vh", width: "85vw"}}>
            <Container>
            <Row>
            <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src="candid\frontend\src\screens\medini.jpeg" />
                        <Card.Body>
                            <center>
                                <Card.Title>Debayan Gupta</Card.Title>
                            </center> 
                        <Card.Text>Professor</Card.Text>
                        </Card.Body>
                        </Card>
                   </center>     
                 </Col>  
            </Row>
        <Row>
                <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src={Medini} />
                        <Card.Body>
                            <center>
                                <Card.Title>Medini Chopra</Card.Title>
                            </center> 
                        <Card.Text>Hi, i hate react</Card.Text>
                        </Card.Body>
                        </Card>
                   </center>     
                 </Col>  
                 <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <center><Card.Title>Arundhati Balasubramaniam</Card.Title></center>
                        <Card.Text>HI, my name is xyz</Card.Text>
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>  
                 <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <center><Card.Title>Karan Handa</Card.Title></center> 
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>       
            </Row>
            <Row>
                <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <center>
                                <Card.Title>Soham De</Card.Title>
                            </center> 
                        <Card.Text>HI, my name is xyz first</Card.Text>
                        </Card.Body>
                        </Card>
                   </center>     
                 </Col>  
                 <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px' }}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <center><Card.Title>Tanvi Roy</Card.Title></center>
                        <Card.Text>HI, my name is xyz</Card.Text>
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>  
                 <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px', borderRadius: '15px'}}>
                        <Card.Img variant="top" src="#" />
                        <Card.Body>
                            <center><Card.Title>Debargha Ganguly</Card.Title></center> 
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>       
            </Row>
            <Row>
            <Col sm> <center>
                    <Card className="shadow-grid" style={{ width: '20rem', margin:'10px' }}>
                        <Card.Img variant="top" src="https://media.chumbak.com/media/catalog/product/image/500x625/8/9/8907605102042_plus35.jpg" />
                        <Card.Body>
                            <center><Card.Title>Deepraj Pandey</Card.Title></center>
                        <Card.Text>HI, my name is xyz</Card.Text>
                        </Card.Body>
                        </Card>
                        </center> 
                 </Col>
            </Row>
            </Container>
            </div>
        </div></>
    )
}

export default People