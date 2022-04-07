import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles(()=>({
    banner:{
       backgroundImage:"url(https://media-exp1.licdn.com/dms/image/C5612AQE8ZaPe94ukTw/article-cover_image-shrink_600_2000/0/1540373473212?e=1652918400&v=beta&t=IS2WSlNrdWU8e0lfRuZ508rmk-bJB6Hvtkohv-A3JdQ)",
       backgroundPosition:"center"
    },
    bannerContent:{
       height:400,
       display:"flex",
       flexDirection:"column",
       justifyContent:"space-around",
       paddingTop:25,

    }
}))

const Banner =()=>{
const classes = useStyles();
    return(
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <Typography variant="h3">TRACK YOUR CRYPTO</Typography>
            </Container>
        </div>
    )
}

export default Banner;