import {useEffect, useState } from "react";

const API_URL = "https://api.apilayer.com/exchangerates_data/latest?symbols=uah%2C%20eur&base=usd";
const API_KEY = process.env.REACT_APP_CONVERSION_DATA_API_KEY;
const DEFAULT_USD_VALUE = 0;

const useConversionData = () => {
    let [rates, setUsd] = useState(DEFAULT_USD_VALUE);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                apikey: API_KEY
            }
        };

        fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(({rates}) => {rates.EUR = 1 / rates.EUR * rates.UAH; setUsd(rates)})
        .catch(err => {
            console.log(err);
       
        });
    }, [])
  
    return rates;
};



export default useConversionData;