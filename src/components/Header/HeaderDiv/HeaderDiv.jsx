import { Divider, Typography } from "@mui/material";
import React from "react";
import classes from "./HeaderDiv.css"
export default function HeaderDiv({...props}) {

    return( 
       
        <Typography className="HeaderDiv">
            {props.children}
        </Typography>
       
    )
}