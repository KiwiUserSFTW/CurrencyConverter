import React from "react";
import useConversionData from "../../hooks/useConversionData";
import HeaderDiv from "./HeaderDiv/HeaderDiv";


export default function Header(props) {
    
let {UAH = "waiting data", EUR} = useConversionData();
    return (
        <div className="Header">
        <HeaderDiv> 
            USD {UAH}<br/>
            EUR {EUR}
        </HeaderDiv>
        </div>
    )
}

