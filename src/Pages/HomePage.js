import { CryptoState } from "../Context";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable"

export default function HomePage() {
    return(
      <div>
        <Banner/>
        <CoinsTable/>
      </div>
    );
      
  };
  