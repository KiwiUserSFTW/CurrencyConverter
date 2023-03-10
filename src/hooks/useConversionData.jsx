import React from "react";
import { useState } from "react";

export default function useConversionData() {
    let [usd, setUsd] = useState("");

    let ApiData = new Promise((res, rej) => {
        let data = async function(url){
        let response = await window.fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: {
            apikey: "znmCAdUOzOgysMj373jTkbyYfcncUPL6",
        }
    })
     return response;
}
console.log(process.env)

data(process.env.REACT_APP_CONVERSION_DATA_API).then((res) => res.text()
).then(result => {
result = JSON.parse(result); 
let {base, rates} = result
console.log(rates.UAH)
if(base) {
    res({rates})
}
})


    }).then((result) => setUsd(result.rates.UAH));
    
    return usd;
}