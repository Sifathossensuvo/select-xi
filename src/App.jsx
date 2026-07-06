import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Available from "./components/Available";

function App() {
  const [coin, setCoin] = useState(0);

  const handleClaimCoin = () => {
    setCoin(coin + 600000);

  };

  return (
    <>
      <Navbar coin={coin} />
      <Hero handleClaimCoin={handleClaimCoin} />
      <Available coin={coin} setCoin={setCoin}></Available>
    </>
  );
}

export default App;