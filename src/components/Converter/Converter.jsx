import React from "react";
import { useState } from "react";
import useConverter from "../../hooks/useCalculator";
import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";

const FIRST_SELECT_ID = 1;
const SECOND_SELECT_ID = 2;

let currentOption = [
    { displayName: "USD", type: "USD" },
    { displayName: "EUR", type: "EUR" },
    { displayName: "UAH", type: "UAH" }
]

export default function Converter() {
    let [inputValue, setInputValue] = useState(10);
    let [selectValue, setSelectValue] = useState(currentOption[0].type);
    let [selectValueTwo, setSelectValueTwo] = useState(currentOption[1].type);
    let [formId, setFormId] = useState(FIRST_SELECT_ID);
    let amount = useConverter(formId == FIRST_SELECT_ID ? selectValue : selectValueTwo, formId == FIRST_SELECT_ID ? selectValueTwo : selectValue, inputValue);
    
    const form = formId == FIRST_SELECT_ID ? amount : inputValue;
    const formTwo = formId == SECOND_SELECT_ID ? amount : inputValue;

   
    return (
        <>
            Converter
            <ConversionContainer 
                formId = {FIRST_SELECT_ID} 
                updateInputValue={setInputValue} 
                inputValue={formTwo} 
                updatePos={setFormId} 
                SelectValue={selectValue} 
                setSelectValue={setSelectValue}
                
            />

            <ConversionContainer 
                formId = {SECOND_SELECT_ID} 
                updateInputValue={setInputValue} 
                inputValue={form} 
                updatePos={setFormId} 
                SelectValue={selectValueTwo}
                setSelectValue={setSelectValueTwo} 
            />
        </>

    )
}


function ConversionContainer(props) {

    function updateSelectedValue(e) {
        props.setSelectValue(e.target.value);
        props.updatePos(props.formId);

    }

    function updateCurrency(e) {
        props.updateInputValue(e.target.value)
        props.updatePos(props.formId)

    }



    return (
        <>
            <br />
            <ConversionSelect onChange={updateSelectedValue} type = {props.SelectValue}/> <br />
            <ConversionInput onChange={updateCurrency} inputValue={props.inputValue} /> <br />
        </>

    )
}


function ConversionSelect(props) {
console.log(props.type)
    return (
        <Grid>
            <Select onChange={props.onChange} defaultValue = {props.type}>
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