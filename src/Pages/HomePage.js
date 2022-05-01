import { CryptoState } from "../Context";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable"
import News from "../components/News";
import Features from "../components/Features";

export default function HomePage() {
    return(
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Banner/>
        <Features/>
        <CoinsTable/>
        <News/>
      </div>
    );
      
  };
  