import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState ,useEffect} from 'react';
import "../App.css";

import SingleNews from './SingleNews';

const News =()=>{

    const[newslist,setNewslist] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
          'X-RapidAPI-Key': 'a182ce3abdmsh8b97d652ab3ef22p1e92d3jsne4469d2305fb'
        }
      };
      
     const fetchNews=()=>{
          axios.request(options).then(function (response) {
          setNewslist(response.data);
      }).catch(function (error) {
          console.error(error);
      })};

      useEffect(()=>{
          fetchNews();
      },[])

      console.log(newslist);
    return(
        <div style={{width:'90%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div style={{display:'flex',justifyContent:"center",marginBottom:20}}>
            <h1 style={{fontSize:'4rem'}}>
                Latest <span style={{color:'#6e16ad'}}>News</span>
            </h1>
        </div>
        <div className='news-section'>
            {
                newslist.slice(1,10).map((news)=>{
                    return(
                        <SingleNews 
                          title={news.title} 
                          source={news.source} 
                          url={news.url}
                          key={nanoid()}
                          />
                    )
                })
            }
        </div>
        
        </div>

    );
};


export default News;