import {addHours,eachHourOfInterval,format} from "date-fns";
import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
import './DayInterval.scss';
import DisplayEvent from "./DisplayEvent";

const DayInterval=()=>{
    const {currentDate} = useContext(DataContext);
    const newDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
    const eachHourOfDay = eachHourOfInterval({
        start:newDate,
        end:addHours(newDate,24)
    })
    return(
        <div className="day-view">
            <div className="day-interval">
                <div className="current-day">
                    <div><b>{format(currentDate,"EEEE")}</b></div>
                    <div><b>{currentDate.getDate()}</b></div>
                </div>
                <div className="time-line">
                    <DisplayEvent/>
                    {eachHourOfDay.map((day,index)=>{
                        return(
                        <div className="time-interval" key={index}>
                            <div className="one-interval">
                                <div className="time">
                                    <span>{format(day,"hh aaa")}</span>
                                </div>
                                <div className="hour-line"></div>
                            </div>
                        </div>
                        )})}               
                </div>
            </div>
        </div>
    )
}
export default DayInterval