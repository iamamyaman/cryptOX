
import React from "react";




const SingleNews = ({title,source,url})=>{
    return(
        <div className="single-news" 
          style={{
              width:'30%',
              padding:10,
              minHeight:150,
              backgroundColor:"#ecd3ff",
              marginBottom:10,
              borderRadius:10,
              borderBottom:'solid 7px #6e16ad',
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
              }}>
            <h3>{title}</h3>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
            }}>
            <p style={{fontSize:12}}>{source}</p>
            <a href ={url} style={{textDecoration:'none'}}>
                <p style={{cursor:'pointer',fontSize:15}}>READ NEWS</p>
            </a>
            </div>
        </div>
    )
};

export default SingleNews;