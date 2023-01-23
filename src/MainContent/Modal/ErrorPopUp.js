import React, { useContext } from "react";
import './ErrorPopUp.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClose, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../DataContext/DataContext";
const ErrorPopUp =()=>{
    const {errorPopUp,setErrorPopUp} = useContext(DataContext);
    return(
        <div className="error-pop-up-background"> 
            <div className={errorPopUp ?"error-pop-up":"none"} onClick={()=>setErrorPopUp('')}>
                <div className="close-pop-up"><FontAwesomeIcon icon={faClose} className="close-icon" onClick={()=>setErrorPopUp('')}/></div>
                <div>{errorPopUp}<FontAwesomeIcon icon={faExclamation} className="icon"/></div>
            </div>
        </div>
    )
}
export default ErrorPopUp