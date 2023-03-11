import React from "react";
import {useState } from "react";

let currentOption = [
    {displayName: "USD", type:"USD"},
    {displayName: "EUR", type:"EUR"},
    {displayName: "UAH", type:"UAH"}
]
export default function Converter() {
    let [inputValue, setInputValue] = useState("");
    let [selectValue, setSelectValue] = useState("USD");
    let [selectValueTwo, setSelectValueTwo] = useState("USD");
    let [pos, setPos] = useState("")
    function updateInputValue(e) {
        setInputValue(e.target.value);
    }
    function updatePos(pos) {
        setPos(pos)
    }
    const form = pos === "1" ? convertPos(1, inputValue) : inputValue; 
    const formTwo = pos === "2" ? convertPos(2, inputValue): inputValue;
    function convertPos(x) {
        if(x === 1) {
        console.log(selectValueTwo)
        switch(selectValueTwo) {
            case "UAH": return inputValue * 3
            case "USD": return inputValue * 5
        }
        return inputValue * 2
        }
        if(x === 2) {
            switch(selectValue) {
                case "USD": return inputValue / 3
                case "UAH": return inputValue / 5
            }
        }
    }
    

    return (
        <>
        Converter
        <ConversionContainer pos = "1" updateInputValue = {updateInputValue} inputValue = {formTwo} updatePos = {updatePos} SelectValue = {selectValue} setSelectValue = {(e) => {setSelectValue(e)}}/>
        <ConversionContainer pos = "2" updateInputValue = {updateInputValue} inputValue = {form} updatePos = {updatePos} SelectValue = {selectValueTwo} setSelectValue = {(e) => {setSelectValueTwo(e)}}/>
        </>
        
    )
}

function convertPos(x, s) {
   


}

function convertPosTwo(s) {
    return s()
}
function ConversionContainer(props) {
    let selectValue = props.selectValue;
    let inputValue = props.inputValue;

    function updateSelectedValue(e) {
        props.setSelectValue(e.target.value);
        
    }

    function updateCurrency(e) {
        props.updateInputValue(e)
        props.updatePos(props.pos)
    }
    console.log(props.pos)
    

    return (
        <>
            <br />
            <ConversionSelect onChange = {updateSelectedValue}/> <br/>
            <ConversionInput onChange = {updateCurrency} inputValue = {inputValue} type = {selectValue}/> <br/> 
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



