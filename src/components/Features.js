import { Container } from "@mui/material";
import React from "react";


const Features =()=>{
    return(
        <Container style={{display:'flex',justifyContent:'space-between',padding:30,flexWrap:'wrap'}}>
            <div className="box" style={{width:100,height:100,backgroundColor:'#6e16ad'}}></div>
            <div className="box" style={{width:100,height:100,backgroundColor:'#6e16ad'}}></div>
            <div className="box" style={{width:100,height:100,backgroundColor:'#6e16ad'}}></div>
            <div className="box" style={{width:100,height:100,backgroundColor:'#6e16ad'}}></div>
        </Container>
    )
}

export default Features;