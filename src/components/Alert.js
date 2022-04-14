import { Snackbar } from "@mui/material";
import { CryptoState } from "../Context"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase";


const BasicAlert =()=>{
    const {alert,setAlert} = CryptoState();
    const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setAlert({ open: false });
      };


  return(
      <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
           {alert.message}
        </Alert>
      </Snackbar>
  )
}

export default BasicAlert;