import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { margin } from "@mui/system";
import "../App.css"

const Banner =()=>{
return(
    <div className="hero">
        <div className="hero-image" >
            <img src="./hero.png" style={{maxWidth:600}}></img>
        </div>
        <div className="hero-content">
            <h1>Track your fav <br></br>
                <span style={{color:"#aa64db"}}>
                    Cryptocurrency
                </span>
            </h1>
            <p>
                Now all your favorite cryptocurrencies at one place to track.<br></br>
                Login and Add your favorite crypto in your wishlist.
            </p>
            <div className="buttons">
            <button className ="track-btn">
                <a href ="#price-table" style={{textDecoration:"none"}}>TRACK CRYPTO</a>
            </button>
            </div>
        </div>

    </div>
)
}

export default Banner;