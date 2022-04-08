import { 
    Container,
    LinearProgress,
    TableContainer,
    Typography,
    TableHead,
    TableRow,
    TableCell,
    Table
 } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { createTheme,TextField } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../Context";
import { fontFamily } from "@mui/system";


const CoinsTable =()=>{

    const[coinlist,setCoinlist] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState("");
    const {currency} = CryptoState();

    const fetchCoins =async()=>{
        const {data} = await axios.get(CoinList(currency));
        setCoinlist(data);
        setLoading(false);
    };

    useEffect(() => {
       fetchCoins();
    }, [currency]);
    
    console.log(search);

    const darkTheme = createTheme({
        palette: {
          primary:{
              main: "#ae35ff"
          },
          mode: 'light',
        },
      });

    return(
      <ThemeProvider theme={darkTheme}>
          <Container id ="price-table" style={{textAlign:"center"}}>
              <Typography variant="h5" style={{margin:18,fontFamily:"Montserrat",fontSize:25,fontWeight:700,color:"#ae35ff"}}>
              💸 Cryptocurrencies Prices <span style={{color:"#6e16ad",fontSize:25,fontWeight:700}}>by Market Cap</span> 💹
              </Typography>

              <TextField 
                label="Search for a Cryptocurrency..." 
                variant="filled"
                style={{width:"80%",marginBottom:0}}
                color="secondary"
                margin="dense"
                onChange={(e)=>setSearch(e.target.value)}
                />

                <TableContainer>
                   {loading
                      ? (<LinearProgress color="secondary"/>)
                      :(
                        <Table>
                        <TableHead style={{backgroundColor:"#6e16ad"}}>
                            <TableRow >
                            {["Coin","Price","24hr Change","Market Cap"].map((head)=>(
                                <TableCell
                                  style={{
                                      color:"white",
                                      fontFamily:"Montserrat"
                                  }}
                                  key={head}
                                  align={head==="coin" ? "":"right"}
                                >
                                    {head}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        </Table>
                      )
                      
                   }
                </TableContainer>
          </Container>

      </ThemeProvider>
    );

}

export default CoinsTable;