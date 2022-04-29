import { Container } from '@mui/material';
import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState ,useEffect} from 'react';

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
        <Container style={{width:'100%'}}>
        <div className='news-section' style={{width:"100%",display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
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
        
        </Container>

    );
};


export default News;