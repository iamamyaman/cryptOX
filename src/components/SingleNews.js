
import React from "react";




const SingleNews = ({title,source,url})=>{
    return(
        <div className="single-news" >
            <h3>{title}</h3>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
            }}>
            <p style={{fontSize:12}}>{source}</p>
            <a href ={url} style={{textDecoration:'none'}}>
                <p style={{cursor:'pointer',fontSize:15,color:'#6e16ad',fontWeight:'bold',color:'#8b50b7'}}>READ NEWS 📖</p>
            </a>
            </div>
        </div>
    )
};

export default SingleNews;