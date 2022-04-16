import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useState,useEffect } from "react";
import { auth,db} from "./firbase";

const Crypto = createContext();

const CryptoContext =({children})=>{
    const [currency,setCurrency] = useState("INR");
    const [symbol,setSymbol] = useState('₹');
    const[user,setUser] =useState(null);
    const[alert,setAlert] = useState({
         open:false,
         message:"",
         type:"success"
    });
    const [loading, setLoading] = useState(false);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        if (user) {
          const coinRef = doc(db, "watchlist", user?.uid);
          var unsubscribe = onSnapshot(coinRef, (coin) => {
            if (coin.exists()) {
              setWatchlist(coin.data().coins);
              
            } else {
              console.log("No Items in Watchlist");
            }
          });
          return () => {
            unsubscribe();
          };
        }
      }, [user]);
      console.log(watchlist);
      
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user) setUser(user);
            else setUser(null);
        })
        
    })

    useEffect(() => {
        if(currency==="INR") setSymbol("₹");
        else {setSymbol("$")};
    }, [currency]);

    return(
        <Crypto.Provider value={{currency,symbol,setCurrency,alert,setAlert,user,watchlist}}>
            {children}
        </Crypto.Provider>
    );

};

export default CryptoContext;

export const CryptoState = ()=>{
    return useContext(Crypto);
};



