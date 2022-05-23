import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container } from 'react-bootstrap'

const home = () => {
  return (
    <>
    <Fade cascade>
          <div style={{padding:"58vh 0 3vh 3vw", display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#dbe8ff"}}>
            <h1 style = {{fontSize:"10vw", color:"#071736"}}>candid.</h1>
            <h2 style = {{fontSize:"2.5vw", fontWeight:"500", color:"#071736"}}>Centre for Analysis of Networks Data and Insight Derivation</h2>
            <h3 style = {{fontSize:"2vw", fontWeight:"300", color:"#071736", paddingTop:"1vh"}}>Ashoka University, India</h3>
          </div>
        </Fade>
        <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#c7dbff"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam lacus, consequat vitae vulputate sed, lobortis eu nunc. Praesent a ligula sed odio feugiat cursus ut id lectus. Cras imperdiet a ante eu cursus. Aenean fermentum urna ut leo posuere, id tincidunt risus lacinia. Aenean venenatis nibh vel convallis fermentum. Aenean lobortis, metus vel condimentum accumsan, lectus tortor hendrerit massa, in consequat nulla arcu id ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla accumsan nibh diam, vitae sodales nibh sollicitudin ut. Morbi in pharetra velit, volutpat luctus tortor.
          <br></br>
          <br></br>
          Vestibulum at sapien ac urna dapibus molestie. Nunc fringilla nulla ligula, quis posuere lacus mollis quis. In ultricies efficitur scelerisque. In sagittis, purus eget mattis ullamcorper, nulla lectus maximus augue, sed ultrices lacus orci eu nibh. Aenean eu elit nisl. Suspendisse luctus sollicitudin ex. Sed facilisis iaculis dolor, sed tempor elit scelerisque non. Nunc ac libero diam. Nam odio nulla, porta in laoreet nec, pharetra ut justo.
        </p>
            <h1 style = {{fontSize:"10vw", color:"#071736", padding:"20vh 0 3vh 3vw"}}>what we do.</h1>          
            </div>
            <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#b3cdfc"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam lacus, consequat vitae vulputate sed, lobortis eu nunc. Praesent a ligula sed odio feugiat cursus ut id lectus. Cras imperdiet a ante eu cursus. Aenean fermentum urna ut leo posuere, id tincidunt risus lacinia. Aenean venenatis nibh vel convallis fermentum. Aenean lobortis, metus vel condimentum accumsan, lectus tortor hendrerit massa, in consequat nulla arcu id ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla accumsan nibh diam, vitae sodales nibh sollicitudin ut. Morbi in pharetra velit, volutpat luctus tortor.
          <br></br>
          <br></br>
          Vestibulum at sapien ac urna dapibus molestie. Nunc fringilla nulla ligula, quis posuere lacus mollis quis. In ultricies efficitur scelerisque. In sagittis, purus eget mattis ullamcorper, nulla lectus maximus augue, sed ultrices lacus orci eu nibh. Aenean eu elit nisl. Suspendisse luctus sollicitudin ex. Sed facilisis iaculis dolor, sed tempor elit scelerisque non. Nunc ac libero diam. Nam odio nulla, porta in laoreet nec, pharetra ut justo.
        </p>
            <h1 style = {{fontSize:"10vw", color:"#071736", padding:"20vh 0 3vh 3vw"}}>who we are.</h1>          
            </div>
    </>
  )
}

export default home