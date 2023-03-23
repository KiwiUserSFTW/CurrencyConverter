import React from "react";
import { useState } from "react";
import useConversionData from "../../hooks/useConversionData";
import useConverter from "../../hooks/useCalculator";
import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";

let currentOption = [
    { displayName: "USD", type: "USD" },
    { displayName: "EUR", type: "EUR" },
    { displayName: "UAH", type: "UAH" }
]
export default function Converter() {
    let {UAH, EUR} = useConversionData();
    let [inputValue, setInputValue] = useState(10);
    let [selectValue, setSelectValue] = useState("USD");
    let [selectValueTwo, setSelectValueTwo] = useState("USD");
    let [formId, setFormId] = useState("");
   
    console.log(formId === 1 ? selectValueTwo : selectValue, formId === 2 ? selectValueTwo : selectValue);
    let amount = useConverter(formId === 1 ? selectValue : selectValueTwo, formId === 1 ? selectValueTwo : selectValue, inputValue);
    console.log(selectValueTwo)

    const form = formId === "1" ? convertPos(1, inputValue) : inputValue;
    const formTwo = formId === "2" ? convertPos(2, inputValue) : inputValue;

    function updateInputValue(e) {
        setInputValue(e.target.value);
    }
    function updatePos(formId) {
        setFormId(formId)
    }

    
    function convertPos(x, inputValue) {
        if (x === 1) {
    
           // return useConverter(selectValue, selectValueTwo, inputValue)
        }
        if (x === 2) {
        
           // return useConverter(selectValueTwo, selectValue, inputValue)    
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
        props.updatePos(props.formId);

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
        <Grid>
         <Select onChange={props.onChange} defaultValue = "USD">
            
            {currentOption.map((e) => {
                return <MenuItem key={e.type} value={e.displayName}> {e.displayName}</MenuItem>
            })}
        </Select>

        </Grid>
       

    )
}


function ConversionInput(props) {

    return (
        <>
            <FormControl fullWidth>
                
                <TextField onChange={props.onChange} type="number" value={props.inputValue} ></TextField>

            </FormControl>
             </>

    )
}