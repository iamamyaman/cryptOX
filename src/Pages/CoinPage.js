import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../Context";
import { makeStyles, ThemeProvider } from "@mui/styles";
import CoinInfo from "../components/CoinInfo";
import { LinearProgress,Typography ,createTheme} from "@mui/material";
import { numberWithCommas } from "../components/CoinsTable";
import "../App.css"
import HTMLReactParser from "html-react-parser";

const parse = require('html-react-parser');

const CoinPage = ()=>{
    const{id} = useParams();
    const[coin,setCoin] = useState();
    const{currency,symbol} = CryptoState();
    
    const fetchCoin = async()=>{
        const {data} = await axios.get(SingleCoin(id));
        setCoin(data);
    };

    useEffect(() => {
        fetchCoin();
    }, []);

    const lightTheme = createTheme({
        palette: {
          primary:{
              main: "#bc5eff"
          },
          mode: 'light',
        },
      });

    const useStyles = makeStyles((theme) => ({
        container: {
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        },
        sidebar: {
          width: "30%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 25,
          borderRight: "2px solid grey",
        },
       
        description: {
          width: "100%",
          padding: 25,
          paddingBottom: 5,
          paddingTop: 0,
          textAlign: "justify",
          
        },
        marketData: {
          alignSelf: "start",
          display:"flex",
          flexDirection: "column",
          gap:"10px",
          padding: 25,
          paddingTop: 10,
          width: "100%",
          [theme.breakpoints.down("md")]: {
            alignItems: "center",
            justifyContent: "space-around",
            gap:"10px"
          },
          [theme.breakpoints.down("sm")]: {
            gap:"10px"
          },
          [theme.breakpoints.down("xs")]: {
            alignItems: "start",
          },
        },
      }));

   

    const classes = useStyles();

    if (!coin) return <LinearProgress color="secondary"/>;

    return(
        <ThemeProvider theme={lightTheme}>
        <div className={classes.container}>
            <div className={classes.sidebar}>
                <img
                    src={coin?.image.large}
                    alt={coin?.name}
                    width="150px"
                    style={{ marginBottom: 20 }}
                />
                <Typography variant="h3" className={classes.heading} style={{
                        fontWeight: "bolder",
                        marginBottom: 20,
                        fontFamily: "Montserrat",
                        color:"#6e16ad"}}>
                  {coin?.name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  className={classes.description} 
                  style={{fontFamily: "Montserrat",color:"#9a88a8"}}
                >
                  {parse(coin?.description.en.split(". ")[0])}.
                </Typography>
                <div className={classes.marketData}>
                <span style={{ display: "flex" }}>
                    <Typography variant="h5" className={classes.heading} style={{
                        fontWeight: "bolder",
                        fontFamily: "Montserrat",
                        color:"#66437f"}}>
                    Rank:
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography
                    variant="h5"
                    style={{
                        fontFamily: "Montserrat",
                    }}
                    >
                    {coin?.market_cap_rank}
                    </Typography>
                </span>

                <span style={{ display: "flex" }}>
                    <Typography variant="h5" className={classes.heading} style={{
                        fontWeight: "bolder",
                        fontFamily: "Montserrat",
                        color:"#66437f"
                    }}>
                    Current Price:
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography
                    variant="h5"
                    style={{
                        fontFamily: "Montserrat",
                    }}
                    >
                    {symbol}{" "}
                    {
                        coin?.market_data.current_price[currency.toLowerCase()]
                    }
                    </Typography>
                </span>
                <span style={{ display: "flex" }}>
                    <Typography variant="h5" className={classes.heading} style={{
                        fontWeight: "bolder",
                        marginBottom: 20,
                        fontFamily: "Montserrat",
                        color:"#66437f"}}>
                    Market Cap:
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography
                    variant="h5"
                    style={{
                        fontFamily: "Montserrat",
                    }}
                    >
                    {symbol}{" "}
                    {
                        coin?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    }
                    M
                    </Typography>
                </span>
                </div>
            </div>
            <CoinInfo coin={coin} />
    </div>
    </ThemeProvider>
  );
};
      
  
export default CoinPage;