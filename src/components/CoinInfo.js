import React,{useState,useEffect} from "react";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Context";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import { CircularProgress } from "@mui/material";
import { Chart } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";

const CoinInfo=()=>{
   const{id} = useParams();
   const[coinData,setCoinData] = useState();
   const {currency,symbol} = CryptoState();
   const [days,setDays] = useState(1);

   const fetchCoinData = async()=>{
       const {data} = await axios.get(HistoricalChart(id, days,currency));
       setCoinData(data.prices);
   };

   useEffect(()=>{
       fetchCoinData()
   },[currency,days]);

   const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
    }));

   const classes = useStyles();

    return(
        <div className={classes.container}>
            {!coinData ?
              (<CircularProgress 
               style={{ color: "#ae35ff" }}
               size={250}
               thickness={1}
               />)
               : (
                 <>
                  <Line
                    data={{
                      labels: coinData.map((coin) => {
                        let date = new Date(coin[0]);
                        let time =
                          date.getHours() > 12
                            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                            : `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                      }),
      
                      datasets: [
                        {
                          data: coinData.map((coin) => coin[1]),
                          label: `Price ( Past ${days} Days ) in ${currency}`,
                          borderColor: "#ae35ff",
                        },
                      ],
                    }}
                    options={{
                      elements: {
                        point: {
                          radius: 1,
                        },
                      },
                    }}
                  />;
                  </>
                  )
            }
        </div>
    );
};

export default CoinInfo;

