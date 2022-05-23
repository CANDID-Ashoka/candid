import React from 'react'
import {Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div style = {{backgroundColor: "#caf0f8", width:"100%", height:"20vh", position:"fixed", bottom:"0", textAlign:"center"}}>
        <Container>
          Footer info goes here
        </Container>
      </div>
    </footer>
  )
}

export default Footer