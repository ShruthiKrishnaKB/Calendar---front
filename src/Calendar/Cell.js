import React from "react";
import './Cell.scss';

const Cell=(props)=>{
    const isActive = props.isActive;
    return(
        <div className= {isActive ? "selected-cell": "cell"}>
            {props.children}
        </div>
    )
}
export default Cell