import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CryptoState } from '../Context';
import { Avatar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { signOut } from 'firebase/auth';
import { auth } from '../firbase';
import CoinsTable from './CoinsTable';

export default function Sidebar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const {user,setAlert,watchlist,coins,symbol} = CryptoState();

  const useStyles = makeStyles({
      container:{
          width:350,
          display:"flex",
          flexDirection:"column",
          padding:20,
          alignItems:"center",
          gap:"5px"
      }
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout =()=>{
      signOut(auth);
      setAlert({
        open:true,
        message:"Signed Out successfully!",
        type:"success"
      })
  }
  const classes = useStyles();

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar 
            alt="Remy Sharp" 
            src={user.photoURL}
            onClick={toggleDrawer(anchor, true)}
            style={{
                cursor:"pointer",
                marginLeft:"10px",
                backgroundColor:"black",
                
            }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)} 
          >
            <div className={classes.container}>
                <img 
                  src={user.photoURL}
                  style={{
                      border:"solid 5px #3a0748",
                      borderRadius:"50%",
                      marginBottom:20
                  }}
                />
                <h3 style={{marginBottom:20}}>{user.email || user.displayName}</h3>
                {coins.map(coin =>{
                  if(watchlist.includes(coin.id))
                    return(
                      <div style={{
                        width:"100%",
                        display:"flex",
                        justifyContent:"space-between",
                        padding:"5px 10px",
                        backgroundColor:"#ceaee5",
                        borderRadius:"10px"
                      }}>
                        <h5>{coin.name}</h5>
                        <p>{symbol}{coin.current_price}</p>
                      </div>
                    )
                  
                })}
                <Button 
                   variant='contained'
                   onClick={logout}
                   style={{marginTop:"10px"}}
                >
                    LOGOUT
                </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
