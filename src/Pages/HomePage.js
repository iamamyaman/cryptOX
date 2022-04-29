import { CryptoState } from "../Context";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable"
import News from "../components/News";

export default function HomePage() {
    return(
      <div>
        <Banner/>
        <CoinsTable/>
        <News/>
      </div>
    );
      
  };
  