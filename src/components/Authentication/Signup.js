import { Box, Button, TextField } from "@mui/material";
import React,{useState} from "react";
import { CryptoState } from "../../Context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase";

const Signup = ({handleClose})=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const {setAlert} = CryptoState();

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
          setAlert({
            open: true,
            message: "Passwords do not match",
            type: "error",
          });
          
          handleClose();
          return;
          
        }
    
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          setAlert({
            open: true,
            message: `Sign Up Successful. Welcome ${result.user.email}`,
            type: "success",
          });
    
          handleClose();
        } catch (error) {
          setAlert({
            open: true,
            message: error.message,
            type: "error",
          });
          
          return;
        }
      };
    

    return(
        <Box 
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
           <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
            value= {confirmPassword}
            onChange = {(e)=>setConfirmPassword(e.target.value)}
          />
          <Button 
            variant="contained"
            onClick={handleSubmit}
          >
              SIGN UP
          </Button>
        </Box>
    )
}

export default Signup;