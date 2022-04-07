import { useEffect } from "react";
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

    const classes=useStyles();
    const {currency} = CryptoState();

    const fetchTrendingCoins = async()=>{
        const {data} = await axios.get(TrendingCoins(`${currency}`));
        console.log(data);
    }
    
    useEffect(() => {
       fetchTrendingCoins()
    }, [currency])

    return(
        <div className={classes.carousel}>
            <h1>Carousel</h1>
        </div>
    );
};

export default Carousel;