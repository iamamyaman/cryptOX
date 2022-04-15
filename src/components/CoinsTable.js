import { 
    Container,
    Box,
    LinearProgress,
    TableContainer,
    Typography,
    TableHead,
    TableRow,
    TableCell,
    Table,
    TableBody,
    Pagination,
    Button,
 } from "@mui/material";
import { ThemeProvider ,makeStyles} from "@mui/styles";
import { createTheme,TextField } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../Context";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinsTable =()=>{

    const[coinlist,setCoinlist] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState("");
    const [page,setPage] = useState(1);
    const {currency,symbol} = CryptoState();

    const navigate = useNavigate();

    const fetchCoins =async()=>{
        const {data} = await axios.get(CoinList(currency));
        setCoinlist(data);
        setLoading(false);
    };

    useEffect(() => {
       fetchCoins();
    }, [currency]);
    
    const handleSearch = () => {
      return coinlist.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
    };

   
    const lightTheme = createTheme({
        palette: {
          primary:{
              main: "#bc5eff"
          },
          mode: 'light',
        },
      });


      const useStyles= makeStyles({
       
        row:{
          backgroundColor:"#f5e8ff",
          cursor:"pointer",
          borderBottom:"solid 2px #ca8af7",
          "&:hover":{
            backgroundColor:"#decbed"
          }
        }
      });

      const classes = useStyles();

    return(
      <ThemeProvider theme={lightTheme}>
          <Container id ="price-table" style={{textAlign:"center"}}>
              <Typography variant="h5" style={{margin:18,fontFamily:"Montserrat",fontSize:25,fontWeight:700,color:"#bc5eff"}}>
              💸 Cryptocurrencies Prices <span style={{color:"#6e16ad",fontSize:25,fontWeight:700}}>by Market Cap</span> 💹
              </Typography>

              <TextField 
                label="Search for a Cryptocurrency..." 
                variant="outlined"
                style={{width:"100%",marginBottom:20}}
                color="secondary"
                onChange={(e)=>setSearch(e.target.value)}
              />

                <TableContainer style={{borderRadius:"10px"}}>
                   {loading
                      ? (<LinearProgress color="secondary"/>)
                      :(
                        <Table>
                        <TableHead style={{backgroundColor:"#6e16ad"}}>
                            <TableRow >
                            {["Coin","Price","24h Change","Market Cap"].map((head)=>(
                                <TableCell
                                  style={{color:"white",fontFamily:"Montserrat"}}
                                  key={head}
                                  align={head==="Coin" ? "left":"right"}
                                >
                                  {head}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                          {handleSearch()
                          .slice((page-1)*10,(page-1)*10+ 10)
                          .map((row)=>{
                            const profit = row.price_change_percentage_24h > 0;
                            return(
                              <TableRow 
                                className={classes.row}
                                onClick = {()=>navigate(`/coins/${row.id}`)} 
                                key = {row.name}
                              >
                                <TableCell
                                  // component="th"
                                  // scope="row"
                                  style={{display:"flex",gap:7}}
                                 >
                                    <img
                                      src={row?.image}
                                      alt={row.name}
                                      height="40"
                                      style={{ marginBottom: 10 }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                      <span style={{fontFamily:"Montserrat",fontWeight:"700",color:"#6e16ad",fontSize:"18px"}}>
                                        {row.symbol.toUpperCase()}
                                      </span>
                                      <span style={{fontFamily:"Montserrat",color:"#6e16ad"}}>
                                        {row.name}
                                      </span>
                                    </div>
                                    
                                </TableCell>
                                
                                <TableCell align="right" style={{fontWeight:700,color:"#6e16ad",fontFamily:"Montserrat"}}>
                                  {symbol}{numberWithCommas(row.current_price.toFixed(2))}
                                </TableCell>

                                <TableCell  align="right">
                                  <span style={{color:profit ? "green" :"#ff2828",fontWeight:700,fontFamily:"Montserrat"}}>
                                    {profit && "+"}
                                    {row.price_change_percentage_24h.toFixed(2)}%
                                    {console.log(row.price_change_percentage_24h)}
                                  </span>
                                </TableCell>

                                <TableCell align="right" style={{fontWeight:700,fontFamily:"Montserrat"}}>
                                  {symbol}{numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                                </TableCell>

                              </TableRow>
                            )
                          })}
                        </TableBody>
                        </Table>
                      )
                   }
                </TableContainer>
                <Pagination 
                  count={(handleSearch()?.length / 10)} 
                  color="secondary"
                  style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom:"50px"
                  }}
                  variant="outlined" 
                  onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);

                  }}
                >
                </Pagination>
          </Container>
      </ThemeProvider>
    );

}

export default CoinsTable;
