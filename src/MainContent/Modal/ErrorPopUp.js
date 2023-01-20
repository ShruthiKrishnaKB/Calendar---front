import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
import './ErrorPopUp.scss'
const ErrorPopUp =()=>{
    const {errorPopUp,setErrorPopUp} = useContext(DataContext);
    return(
        <div className="error-pop-up-background"> 
            <div className={errorPopUp ?"error-pop-up":"none"} onClick={()=>setErrorPopUp('')}>
                <div>{errorPopUp}<FontAwesomeIcon icon={faExclamation} className="icon"/></div>
            </div>
        </div>
    )
}
export default ErrorPopUp 