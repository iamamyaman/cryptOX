import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState,useEffect } from "react";
import { auth } from "./firbase";

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
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user) setUser(user);
            else setUser(null);
        })
        
    })

    useEffect(() => {
        if(currency==="INR") setSymbol("₹");
        else {setSymbol("$")};
    }, [currency]);

    return(
        <Crypto.Provider value={{currency,symbol,setCurrency,alert,setAlert,user}}>
            {children}
        </Crypto.Provider>
    );

};

export default CryptoContext;

export const CryptoState = ()=>{
    return useContext(Crypto);
};



