import React from "react";
import classes from "./HeaderDiv.css"
export default function HeaderDiv({...props}) {

    return( 
        <div className="HeaderDiv"> 
        {props.children}
        </div>
    )
}