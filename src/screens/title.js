import React from 'react'

const title = () => {
  return (
      <>
    <div style = {{display: 'flex-column', justifyContent:"left", padding:"4vh", paddingTop: "6vh", textAlign:"left", backgroundColor:"#222831"}}>
        <h3 style={{fontFamily: "Montserrat", fontSize: "2.5vw", paddingLeft:"6vw", color:"#EEEEEE"}}>Digital Supplement:</h3>
        <em><h1 style={{fontFamily: "Montserrat", fontSize:"5vw", paddingLeft:"6vw", color:"#B55400"}}>Absalom, Absalom!</h1>
        <h1 style={{fontFamily: "Montserrat", fontSize:"5vw", color:"#EEEEEE",paddingLeft:"6vw" }}>and The Digital Humanities</h1></em>
    </div>
    <div style = {{display: 'flex', fontSize:"1.5vw", justifyContent:"safe-left", width:"100%", height: "55vh", paddingTop:"20vh", paddingLeft:"4vh", textAlign:"left", backgroundColor:"#222831"}}>
    <p style={{color:"#EEE", paddingLeft:"6vw", width:"60%"}}>Home</p>
    </div>
    </>
  )
}

export default title