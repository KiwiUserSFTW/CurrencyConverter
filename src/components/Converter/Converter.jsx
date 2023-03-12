import React from "react";
import { useState } from "react";
import useConversionData from "../../hooks/useConversionData";


let currentOption = [
    { displayName: "USD", type: "USD" },
    { displayName: "EUR", type: "EUR" },
    { displayName: "UAH", type: "UAH" }
]
export default function Converter() {
    let {UAH, EUR} = useConversionData();
  
    let [inputValue, setInputValue] = useState(0);
    let [selectValue, setSelectValue] = useState("USD");
    let [selectValueTwo, setSelectValueTwo] = useState("USD");
    let [formId, setFormId] = useState("")

    const form = formId === "1" ? convertPos(1, inputValue) : inputValue;
    const formTwo = formId === "2" ? convertPos(2, inputValue) : inputValue;

    function updateInputValue(e) {
        setInputValue(e.target.value);
    }
    function updatePos(formId) {
        setFormId(formId)
    }

    
    function convertPos(x) {
        if (x === 1) {

         
            switch (selectValueTwo) {
                case selectValue: return inputValue;
                case "UAH":
                    switch(selectValue) {
                     case "USD": return inputValue * UAH 
                     case "EUR": return inputValue * EUR
                    }

                case "USD": 
                    switch(selectValue) {
                    case "UAH" : return inputValue / UAH
                    case "EUR" : return inputValue * EUR / UAH
                    }

                case "EUR": switch(selectValue) {
                    case "USD" : return inputValue * UAH / EUR
                    case "UAH" : return inputValue / UAH
                    }
            }
      
        }
        if (x === 2) {
            switch (selectValue) {
                case selectValueTwo: return inputValue;
                case "UAH":
                    switch(selectValueTwo) {
                     case "USD": return inputValue * UAH 
                     case "EUR": return inputValue / EUR
                    }

                case "USD": 
                    switch(selectValueTwo) {
                    case "UAH" : return inputValue / UAH
                    case "EUR" : return inputValue * EUR / UAH
                    }

                case "EUR": switch(selectValueTwo) {
                    case "USD" : return inputValue * UAH / EUR
                    case "UAH" : return inputValue / EUR
                    }
            }
        }
    }


    return (
        <>
            Converter
            <ConversionContainer formId="1" updateInputValue={updateInputValue} inputValue={formTwo} updatePos={updatePos} SelectValue={selectValue} setSelectValue={(e) => { setSelectValue(e) }} />
            <ConversionContainer formId="2" updateInputValue={updateInputValue} inputValue={form} updatePos={updatePos} SelectValue={selectValueTwo} setSelectValue={(e) => { setSelectValueTwo(e) }} />
        </>

    )
}


function ConversionContainer(props) {
    let selectValue = props.selectValue;
    let inputValue = props.inputValue;

    function updateSelectedValue(e) {
        props.setSelectValue(e.target.value);

    }

    function updateCurrency(e) {
        props.updateInputValue(e)
        props.updatePos(props.formId)
    }



    return (
        <>
            <br />
            <ConversionSelect onChange={updateSelectedValue} /> <br />
            <ConversionInput onChange={updateCurrency} inputValue={inputValue} type={selectValue} /> <br />
        </>

    )
}


function ConversionSelect(props) {

    return (
        <select onChange={props.onChange}>
            {currentOption.map((e) => {
                return <option key={e.type} value={e.displayName}> {e.displayName}</option>
            })}
        </select>

    )
}


function ConversionInput(props) {

    return (
        <>
            <input onChange={props.onChange} type="number" value={props.inputValue} ></input>
        </>

    )
}