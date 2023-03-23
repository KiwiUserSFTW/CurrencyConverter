import { useState, useEffect} from "react";

const API_KEY = process.env.REACT_APP_CONVERSION_DATA_API_KEY;

const useConverter = (from, to, amount) => {
    let [amountValue, setAmountValue] = useState(0);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                apikey: API_KEY
            }
        };
        
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .then(result => {setAmountValue(result.result)})
        .catch(error => console.log('ERROR', error));

    },[from, to, amount])

    return amountValue;
}

export default useConverter;