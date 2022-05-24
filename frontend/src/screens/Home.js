import React from 'react'
import {Card, Button} from 'react-bootstrap'

const home = () => {
  return (
    <>
          <div style={{padding:"48vh 0 3vh 3vw", display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#dbe8ff"}}>
            <h1 style = {{fontSize:"10vw", color:"#071736"}}>candid.</h1>
            <h2 style = {{fontSize:"2.5vw", fontWeight:"500", color:"#071736"}}>Centre for Analysis of Networks Data and Insight Derivation</h2>
            <h3 style = {{fontSize:"2vw", fontWeight:"300", color:"#071736", paddingTop:"1vh"}}>Ashoka University, India</h3>
          </div>
        <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#c7dbff"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        Social Network Analysis is an emerging area of interdisciplinary research that studies social structures and interactions online. Powered with recent advances in Deep Learning, visualization libraries and computing power, it is now possible to efficiently analyze large corpuses of internet data to identify trends and narratives in online communities. 
          <br></br>
          <br></br>
          Understanding social media and online discourse is also crucially important now with the increased penetration of the internet in everyone’s daily lives. There is sufficient research to suggest that one’s online activities are a reflection of their civil and political activities in real life. An insight into online discourse therefore, also holds significant value in understanding the real world, public opinion and popular sentiment. 
          </p>
            <h1 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>what we do.</h1>          
            </div>
            <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#b3cdfc"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        The CANDID team has built a ML-based pipeline for analyzing discourse around any recent event on Twitter. The said pipeline includes Named Entity Resolution (NER), Sentiment Analysis and Social Graph Analysis - all using State-of-the-Art Tools and Deep Learning Models (distillBERT etc). We plan to use this pipeline to efficiently analyze online discourse around all geopolitical events in the future.
          <br></br>
          <br></br>
          In addition to this, we have the following ongoing projects: <br></br>
          1. Geolocating sentiments surrounding the Russia-Ukraine discourse on Twitter (Commissioned by ThePrint) <br></br>
          2. Propaganda, Narrative and Echo-Chambers: a Network-based analysis of the Russia-Ukraine discourse <br></br>
          3. Efficient and effective Tweet sampling strategies around geopolitical events <br></br>
          4. Twitter Corpus for Multilingual Sentiment Analysis <br></br>
        </p>
            <h1 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>who we are.</h1>          
            </div>
    </>
  )
}

export default home