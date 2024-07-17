import react, { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import "./App.css";
import { IoMdSearch } from "react-icons/io";
import DropDown from "./components/DropDown";
import { axiosClient } from "./utils/axiosClient";

const App = () => {

  const [cryptoSearch,setCryptoSearch]=useState({});
 
const performAPICall = async (selectedValue:string) => {
  try {
    const response = await axiosClient.post(`/cryptoSearch?searchParams=${selectedValue}`)
    console.log("response",response)
    setCryptoSearch(response?.data?.result)
  } catch (err) {
    console.log("err", err);
  }
}

useEffect(() => {
	let interval = setInterval(() => {
		performAPICall("")
	}, 30000);
	return () => {
		clearInterval(interval);
	};
}, []);

  return (
    <div className="crypto-info">
      <div className="header">
        <h2>Cryptocurrency Prices Live</h2>
        <h3>Top Coins by Market Cap</h3>
        <DropDown setCryptoSearch={setCryptoSearch}/>
      </div>
      <DataTable cryptoSearch={cryptoSearch}/>
    </div>
  );
};

export default App;
