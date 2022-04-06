import { AppBar, Container, Select, Toolbar, Typography,MenuItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import "../App.css";
import { useNavigate } from 'react-router-dom';


const useStyles= makeStyles((theme)=>({
  title:{
    flex:1,
    color:"#2be9ff",
    cursor:"pointer",
    
  }
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography
             variant ="h6" 
             onClick ={()=>navigate("/")} 
             className={classes.title}
             >
              CryptOX
            </Typography>
            <Select 
              value={"INR"}
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


