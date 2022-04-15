import { AppBar, Container, Select, Toolbar, Typography,MenuItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import {CryptoState} from "../Context";
import { borderBottom } from '@mui/system';
import AuthModal from './Authentication/AuthModal';
import Sidebar from './Sidebar';


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
        main: "#bc5eff",
      },
     
    },
  });

  const {currency,symbol,setCurrency,user} = CryptoState();

  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar sx={{height:80,justifyContent:"center",borderBottom:"solid 2px #6e16ad",boxShadow:"none"}} color='transparent'  position='static'>
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
            { user ? <Sidebar/>:<AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>

  );

    
}


