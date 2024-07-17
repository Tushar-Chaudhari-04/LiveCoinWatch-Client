import React, { useState, useEffect } from "react";
import {axiosClient}  from '../utils/axiosClient';

const DropDown = ({setCryptoSearch}) => {
  const options = [
    {
      id: 1,
      label: "Bitcoin",
      value: "BTC",
    },
    {
      id: 2,
      label: "Ethereum",
      value: "ETH",
    },
    {
      id: 3,
      label: "Tether",
      value: "USDT",
    },
    {
      id: 4,
      label: "BNB",
      value: "BNB",
    },
    {
      id: 5,
      label: "Solana",
      value: "SOL",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

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
    console.log("selectedValue", selectedValue);
    let data=selectedValue;
    performAPICall(data);
  }, [selectedValue]);


  return (
    <select
      value={selectedValue}
      onChange={(e) => setSelectedValue(e?.target?.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default DropDown;
