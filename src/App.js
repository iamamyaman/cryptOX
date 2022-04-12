import React from "react"
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { makeStyles, ThemeProvider } from "@mui/styles";
import Footer from "./components/Footer";
import { createTheme } from "@mui/material";

const lightTheme = createTheme({
   palette: {
     primary:{
         main: "#bc5eff"
     },
     mode: 'light',
   },
 });
 
const useStyles = makeStyles(()=>({
   App:{
      backgroundColor:"white",
      minHeight:"100vh",
      color:"gray",
      width:"100vw",
   }
}));



function App(){
   const classes = useStyles()
   return(
      <ThemeProvider theme={lightTheme}>
       <BrowserRouter>
          <div className={classes.App}>
            <Header/>
            <Routes>
               <Route path ="/" element={<HomePage/>} />
               <Route path ="/coins/:id" element={<CoinPage/>} />
            </Routes>
            <Footer/>
          </div>
       </BrowserRouter>
       </ThemeProvider>
   )
}

export default App;
