import { Box, Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react"
import { CryptoState } from "../../Context";
import { auth } from "../../firbase";

const Login = ({handleClose})=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const{setAlert} = CryptoState();

    const handleSubmit = async()=>{
      if(!email || !password){
        setAlert({
           open:true,
           message:"Please fill all the fields",
           type:"error"
        });
        return;
      };
      try{
       const result = await signInWithEmailAndPassword(auth,email,password);
        setAlert({
          open: true,
          message: `Sign in Successful. Welcome ${result.user.email}`,
          type: "success",
        });
      }

      catch(error){
          setAlert({
            open:true,
            message:error.message,
            type:"error"
          });
          return;
      };
    };

    return(
        <
          Box
          p={3}
          style={{display:"flex",flexDirection:"column",gap:"20px"}}
        >
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange = {(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            value= {password}
            onChange = {(e)=>setPassword(e.target.value)}
          />
          <Button 
            variant="contained"
            onClick={handleSubmit}
            style={{backgroundColor:"#6E16AD"}}
          >
              LOGIN
          </Button>
          </Box>
    )
}

export default Login;