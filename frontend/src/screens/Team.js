import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Debayan from './photos/Debayan.png'
import Arundhati from './photos/Arundhati.png'
import Debargha from './photos/Debargha.png'
import Soham from './photos/Soham.png'
import Deepraj from './photos/Deepraj.png'
import Medini from './photos/Medini.png'
import Karan from './photos/Karan.png'
import Tanvi from './photos/Tanvi.png'
import './People.css';

function People() {
    return (
        <>
        <div style={{ padding: "56vh 0 3vh 3vw", display: "flex", flexDirection: "column", textAlign: "left", justifyContent: 'flex-start', alignItems: 'baseline', backgroundColor: "#dbe8ff" }}>
            <h2 style={{ fontSize: "10vw", color: "#071736" }}>meet the team.</h2>
            <h4 style = {{fontSize:"2vw", fontWeight:"300", color:"#071736", paddingTop:"1vh"}}>
            Faculty, Fellows and Students of Ashoka University who aim to tackle disinformation using technology.
            </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "center", justifyContent: 'center', alignItems: 'baseline', backgroundColor: "#c7dbff" }}>
            <div style={{ display: "flex", flexDirection: "center", marginTop: "7vh", marginBottom: "7vh", width: "85vw"}}>
            <Container>
                <h1>research staff</h1>
            <Row>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Debayan} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Debayan Gupta
                </Card.Title>
                <Card.Text as ="h5">
                    Faculty Supervisor
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                    <a href= "https://debarghaganguly.com/">
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Debargha} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Debargha Ganguly
                </Card.Title>
                <Card.Text as ="h5">
                    Research Staff
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </a>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Deepraj} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Deepraj Pandey
                </Card.Title>
                <Card.Text as ="h5">
                    Research Staff
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <a href = "https://www.sohamde.in">
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Soham} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Soham De
                </Card.Title>
                <Card.Text as ="h5">
                    Research Staff
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </a>
                </Col>
            </Row>
            <h1>research interns</h1>
            <Row>
            <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <a href = "https://www.linkedin.com/in/arundhati-bala/">
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Arundhati} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Arundhati Balasubramaniam
                </Card.Title>
                <Card.Text as ="h5">
                    Research Intern
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </a>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Karan} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Karan Handa
                </Card.Title>
                <Card.Text as ="h5">
                    Research Intern
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Medini} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Medini Chopra
                </Card.Title>
                <Card.Text as ="h5">
                    Research Intern
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col className = "t-image"s={12} md={6} lg={4} xl={3}>
                <Card className = 'my-2 p5 rounded' style = {{backgroundColor:"#e8f0fc", border: "none"}}>
                <Card.Img style = {{padding:"3vh 3vh 0 3vh"}} src = {Tanvi} variant = "top" />
                <Card.Body>
                <Card.Title as = "h4">
                    Tanvi Roy
                </Card.Title>
                <Card.Text as ="h5">
                    Research Intern
                </Card.Text>
                <Card.Text as = "h6" >
                    Ashoka University
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            </div>
        </div></>
    )
}

export default People