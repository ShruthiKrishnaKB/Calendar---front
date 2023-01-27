import React, { useContext, useEffect } from "react";
import './ListAppointment.scss';
import moment from "moment/moment";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
const ListAppointment=()=>{
    const {currentDate} = useContext(DataContext);
    const {getAllEventByDate,getByDate} = useContext(ServiceContext);
    useEffect(()=>{
        getAllEventByDate(moment(currentDate,"DD-MM-YYYY").format("YYYY-MM-DD"));
        // eslint-disable-next-line
    },[currentDate])
    return(
        <div className="list-item">
            <div className="list-item-wrapper">
                {getByDate && getByDate.map((item,index)=>{
                    const start = parseInt(item.startTimeHrMin.slice(11,13));
                    const end = parseInt(item.endTimeHrMin.slice(11,13));
                    const startTime = (start%12===0)?(12+item.startTimeHrMin.slice(13,16)):(start%12) + item.startTimeHrMin.slice(13,16);
                    const endTime = (end%12===0)?(12+item.endTimeHrMin.slice(13,16)):(end%12)+ item.endTimeHrMin.slice(13,16);
                    return(
                        (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
                            <li key={index} className="event-display-side">
                            <div className="event-name">{item.eventName}</div>
                            <div><span>{(start>=12) ? startTime+" pm" : startTime+" am"} - </span>
                            <span> {(end>=12) ? endTime+" pm" : endTime+" am"}</span></div>
                            <div className="event-name">{item.descriptionOfEvent}</div>
                            </li>
                            
                    )})}
                </div>
        </div>
    )
}
export default ListAppointment;