import React from "react";
import useConversionData from "../hooks/useConversionData";
import { useState } from "react";

export default function Header(props) {
let usd = useConversionData();

    return (
        <div className="Header">
        <div> USD: {usd} </div>
        </div>
    )
}

