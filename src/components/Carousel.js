import { useState,useEffect } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../Context";

const useStyles=makeStyles(()=>({
    carousel:{
        display:"flex",
        height:100,
        backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center"

    }
}));


const Carousel =()=>{
    const [trending,setTrending] = useState();
    const classes=useStyles();
    const {currency} = CryptoState();

    const fetchTrendingCoins = async()=>{
        const {data} = await axios.get(TrendingCoins(`${currency}`));
        setTrending(data);
        console.log(data);
    }
    
    useEffect(() => {
       fetchTrendingCoins()
    }, [currency])

  
    return(
        <div className={classes.carousel}>
        </div>
    );
};

export default Carousel;