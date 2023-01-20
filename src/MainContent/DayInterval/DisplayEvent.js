import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useContext, useState } from "react";
import './DisplayEvent.scss';
import DeleteModal from "../Modal/DeleteModal";
import Axios from "../Axios/Axios";
import { DataContext } from "../../DataContext/DataContext";
const DisplayEvent=()=>{
    const {event,currentDate} = useContext(DataContext);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [isDelete,setIsDelete] = useState('');
    const handleDelete=(id)=>{
        setIsDelete(id);
        setOpenDeleteModal(true);
    }
    
    const deleteEvent= async (delId)=>{
        await Axios.delete(`api/appointments/event/${delId}`)
        setOpenDeleteModal(false);
    }
    
    return(
        <div>
                {event.map((item)=>{
                    const start =  moment (item.startTimeHrMin,'DD-MM-YYYY HH:mm')
                    const end =  moment (item.endTimeHrMin,'DD-MM-YYYY HH:mm')
                    const result = end.diff(start,'minutes')
                    const eventHeight = (result / 60)*46;
                    const topHr = parseInt(item.startTimeHrMin.slice(11,13));
                    const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*46;
                    const isSelectedDate = currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)
                    return(
                        <div className="event-wrapper">
                            <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>handleDelete(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil} /></span></span></div>
                        </div>
                    )
                })}
                {openDeleteModal && <DeleteModal setOpenDeleteModal={setOpenDeleteModal} deleteEvent={deleteEvent} isDelete ={isDelete} />}
        </div>
    )
}
export default DisplayEvent;