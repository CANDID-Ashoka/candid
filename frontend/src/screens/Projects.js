import React from 'react'

export default function Projects() {
  return (
    <>
    <div style={{ padding: "56vh 0 3vh 3vw", display: "flex", flexDirection: "column", textAlign: "left", justifyContent: 'flex-start', alignItems: 'baseline', backgroundColor: "#dbe8ff" }}>
            <h2 style={{ fontSize: "10vw", color: "#071736" }}>projects.</h2>
            <h4 style = {{fontSize:"2vw", fontWeight:"300", color:"#071736", paddingTop:"1vh"}}>
            Read about our work on disinformation, reportage and other topics.
            </h4>
        </div>

        <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#c7dbff"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        Team CANDID has developed a sophisticated pipeline for analysing internet data using State-of-the-Art Tools and Deep Learning Models (distillBERT etc) for Named Entity Resolution (NER), Sentiment Analysis and Social Graph Analysis. The software suite is under active development and will be released soon.
          <br></br>
          </p>
            <h2 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>software development.</h2>          
            </div>

        <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#b3cdfc"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        CANDID has investigated various aspects of the ongoing conflict in Ukraine (2022) in collaboration with ThePrint. We perform various frequency studies, temporal distribution of tweeting activity and polarisation on a corpus of over 500,000 tweets around the conflict. Our findings are summarised in an article featured in ThePrint and The FinePrint (their premium offering).
          {/* <br></br> */}
            </p>
            <h2 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>Russia Ukraine information war.</h2>          
            </div>

            <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#9dc0ff"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        CANDID is currently studying various aspects of media reportage and the biases therein, with a focus on Socio-Political events in India.
          <br></br>
          <br></br>
            </p>
            <h2 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>media biases and predictability.</h2>          
            </div>

            <div style={{display:"flex", flexDirection:"column", textAlign:"left", justifyContent:'flex-start', alignItems: 'baseline', backgroundColor:"#86b1ff"}}>
        <p style = {{padding: "12vh 5vw 0 20vw", textAlign:"right", fontSize:"1.5vw", fontFamily:"sans-serif"}}>
        Team CANDID often publishes shorter-format blog articles which are intended to share short and crisp insights on relevant issues of public interest. Keep an eye out for these on our Blog page.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            </p>
            <h2 style = {{fontSize:"10vw", color:"#071736", padding:"18vh 0 3vh 3vw"}}>blog articles.</h2>          
            </div>
    </>
  )
}
