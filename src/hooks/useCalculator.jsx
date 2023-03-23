import { useState, useEffect} from "react";

const API_KEY = process.env.REACT_APP_CONVERSION_DATA_API_KEY;

const useConverter = (to, from, amount) => {
    let [amountValue, setAmountValue] = useState(0);
    console.log(amount, " from = " ,from , "to = " , to)
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

    })

    return amountValue;
}

export default useConverter;