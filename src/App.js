import React from "react"
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { makeStyles } from "@mui/styles";
import { minHeight } from "@mui/system";

const useStyles = makeStyles(()=>({
   App:{
      backgroundColor:"white",
      minHeight:"100vh",
      color:"gray",
      width:"100vw",
   }
}))

function App(){
   const classes = useStyles()
   return(
       <BrowserRouter>
          <div className={classes.App}>
            <Header/>
            <Routes>
            <Route path ="/" element={<HomePage/>} />
            <Route path ="/coins/:id" element={<CoinPage/>} />
            </Routes>
          </div>
       </BrowserRouter>
   )
}

export default App;
