import React, {useState} from "react";
import axios from "axios";



function Coutries() {
  const [coutries, setCountries] = useState([]);
  if(!coutries)
  axios.get("https://restcountries.eu/rest/v2/all").then(res => {
    console.log(res);
  })
  return(
    <h1>
      Hello bro

    </h1>
  );
}

export default Coutries;