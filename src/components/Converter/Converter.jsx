import React from "react";
import { useState } from "react";
import useConversionData from "../../hooks/useConversionData";
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
    let {UAH, EUR} = useConversionData();
    let [inputValue, setInputValue] = useState(10);
    let [selectValue, setSelectValue] = useState("USD");
    let [selectValueTwo, setSelectValueTwo] = useState("USD");
    let [formId, setFormId] = useState("");
    let amount = useConverter(formId == FIRST_SELECT_ID ? selectValue : selectValueTwo, formId == FIRST_SELECT_ID ? selectValueTwo : selectValue, inputValue);

    const form = formId == FIRST_SELECT_ID ? convertPos(FIRST_SELECT_ID, inputValue) : inputValue;
    const formTwo = formId == SECOND_SELECT_ID ? convertPos(SECOND_SELECT_ID, inputValue) : inputValue;

    function updateInputValue(e) {
        setInputValue(e.target.value);
    }
    function updatePos(formId) {
        setFormId(formId)
    }

    
    function convertPos(x, inputValue) {
        if (x == FIRST_SELECT_ID) {
            return amount;
        }
        if (x == SECOND_SELECT_ID) {
            return amount;
           // return useConverter(selectValueTwo, selectValue, inputValue)    
        }
    }


    return (
        <>
            Converter
            <ConversionContainer formId= {FIRST_SELECT_ID} updateInputValue={updateInputValue} inputValue={formTwo} updatePos={updatePos} SelectValue={selectValue} setSelectValue={(e) => { setSelectValue(e) }} />
            <ConversionContainer formId= {SECOND_SELECT_ID} updateInputValue={updateInputValue} inputValue={form} updatePos={updatePos} SelectValue={selectValueTwo} setSelectValue={(e) => { setSelectValueTwo(e) }} />
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