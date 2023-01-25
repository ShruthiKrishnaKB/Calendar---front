import React, { useContext, useEffect, useState } from "react";
import './DayInterval.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {addHours,eachHourOfInterval,format} from "date-fns";
import { DataContext } from "../../DataContext/DataContext";
import DisplayEvent from "./DisplayEvent";

const DayInterval=()=>{
    const {currentDate} = useContext(DataContext);
    const[currentTime,setCurrentTime]=useState();
    const newDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
    const eachHourOfDay = eachHourOfInterval({
        start:newDate,
        end:addHours(newDate,24)
    })
    useEffect(()=>{
        format(currentDate,"yyyy LL dd") === format(new Date(),"yyyy LL dd") ? setCurrentTime((new Date().getHours()*45.8) + ((new Date().getMinutes()/60)*(45.8))+46) : setCurrentTime(0)

    },[currentDate])
    return(
        <div className="day-view">
            <div className="day-interval">
                <div className="current-day">
                    <div><b>{format(currentDate,"EEEE")}</b></div>
                    <div><b>{currentDate.getDate()}</b></div>
                </div>
                <div className="time-line">
                    <div className={currentTime===0 ? "no-event": "present-time-wrapper"} ><FontAwesomeIcon icon={faCircle} className="circle-icon" style={{top:parseInt(currentTime)+12}}/> <div className="present-time" style={{top:currentTime}}></div></div>
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