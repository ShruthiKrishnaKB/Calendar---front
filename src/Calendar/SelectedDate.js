import React, { useContext } from "react";
import './SelectedDate.scss';
import { DataContext } from "../DataContext/DataContext";
const SelectedDate =()=>{
    const {setCurrentDate} = useContext(DataContext);
    const handleClickToday=()=>setCurrentDate(new Date());
    return(
        <div className="today"> 
            <button className="primary-button" onClick={()=>handleClickToday()}>Today</button>
        </div>
    )
}
export default SelectedDate