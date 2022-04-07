import { AppBar, Container, Select, Toolbar, Typography,MenuItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import {CryptoState} from "../Context";


const useStyles= makeStyles((theme)=>({
  title:{
    flex:1,
    color:"#ae35ff",
    cursor:"pointer",
  }
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ae35ff",
      },
     
    },
  });

  const {currency,symbol,setCurrency} = CryptoState();

  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography
             fontWeight="900"
             fontFamily="Montserrat"
             variant ="h4" 
             onClick ={()=>navigate("/")} 
             className={classes.title}
             >
              Crypt<span style={{color:"#6e16ad"}}>OX</span>
            </Typography>
            <Select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              variant ="outlined"
              style={{
                width:100,
                height:40,
                marginLeft:15
              }} 
              >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>

  );

    
}


