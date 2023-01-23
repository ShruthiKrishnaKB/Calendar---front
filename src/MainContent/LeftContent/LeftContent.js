import React from "react";
import './LeftContent.scss';
import SelectedDate from "../../Calendar/SelectedDate";
import SideCalendar from "./SideCalendar";
const LeftContent = ()=>{
    return (
        <div className="month-calendar">
            <SelectedDate/>
            <SideCalendar/>
        </div>
        );
}
export default LeftContent