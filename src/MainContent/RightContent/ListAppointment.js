import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
import './ListAppointment.scss';
const ListAppointment=()=>{
    const {event,currentDate} = useContext(DataContext);
    return(
            <div className="list-item">
                    {event.map((item,index)=>{
                        const start = parseInt(item.startTimeHrMin.slice(11,13));
                        const end = parseInt(item.endTimeHrMin.slice(11,13));
                        const startTime = (start%12===0)?(12+item.startTimeHrMin.slice(13,16)):(start%12) + item.startTimeHrMin.slice(13,16);
                        const endTime = (end%12===0)?(12+item.endTimeHrMin.slice(13,16)):(end%12)+ item.endTimeHrMin.slice(13,16);
                        return(
                            (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
                                    <li key={index} className="event-display-side">
                                    <div>{item.eventName}</div>
                                    <div><span>{(start>=12) ? startTime+" pm" : startTime+" am"} - </span>
                                    <span> {(end>=12) ? endTime+" pm" : endTime+" am"}</span></div>
                                    <div>{item.descriptionOfEvent}</div>
                                    </li>
                        )})}    
            </div>
    )
}
export default ListAppointment;