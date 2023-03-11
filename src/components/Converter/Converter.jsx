import React from "react";
import {useEffect, useState } from "react";

let currentOption = [
    {displayName: "USD", type:"USD"},
    {displayName: "EUR", type:"EUR"},
    {displayName: "UAH", type:"UAH"}
]
export default function Converter() {
    let [fromInputValue, setfromInputValue] = useState(0);
    let [toInputValue, setToInputValue] = useState(0);
   
    return (
        <>
        Converter
        <ConversionContainer inputType = {fromInputValue}/>
        <ConversionContainer inputType = {toInputValue}/>
        </>
        
    )
}

function ConversionContainer(props) {
    let [selectValue, setSelectValue] = useState("USD");
    let inputType = props.inputType;
    

    function updateSelectedValue(e) {
        setSelectValue(e.target.value);
        
    }

    function updateCurrency(e) {
        setfromInputValue(e.target.value);
        console.log(fromInputValue)
    }
    return (
        <>
            <br />
            <ConversionSelect onChange = {updateSelectedValue}/> <br/>
            <ConversionInput  onChange = {updateCurrency} fromInputValue = {fromInputValue} type = {selectValue}/> <br/> 
        </>
        
    )
}


function ConversionSelect(props) {
    
    
    

    return (
    <select onChange={props.onChange}>
     {currentOption.map((e) => {
        return <option key = {e.displayName} value={e.displayName}> {e.displayName}</option>
    })}   
    </select>
               
    )
}


function ConversionInput(props) {

    return (
        <>
        <input onChange = {props.onChange} type="number" value = {props.inputValue} ></input>
        </>
        
    )
}