import { formatISO, parseISO } from "date-fns";
import moment from "moment";
import React, {  useContext, useState } from "react";
import uuid from "react-uuid";
import { DataContext } from "../../DataContext/DataContext";
import Axios from "../Axios/Axios";
import './CreateModal.scss';
const CreateModal = ()=>{
    const {currentDate, event, setEvent,setOpenCreateModal,setErrorPopUp} = useContext(DataContext);
    const [title,setTitle]=useState('');
    const [eventDate,setEventDate] = useState(currentDate.toISOString().slice(0,10));
    const [startTime,setStartTime] = useState('');
    const [endTime, setEndTime]=useState('');
    const [description, setDescription]=useState('');
    const createEvents = async(myEvent)=>{
        try{
            const request = {
                id:uuid(),
                eventName : myEvent.eventName,
                eventDate:formatISO(parseISO(myEvent.eventDate)),
                startTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.startTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),
                endTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.endTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),    
                descriptionOfEvent:myEvent.descriptionOfEvent, 
            }
            const response = await Axios.post("api/appointments",request);
            setEvent([...event,response.data]);
        }
        catch(error){
            setErrorPopUp(error.response.data);
        }
    }
    const isSubmit=(e)=>{
        const newEvent={
            eventName:title,
            eventDate:eventDate,
            startTimeHrMin:startTime,
            endTimeHrMin:endTime,     
            descriptionOfEvent:description,       
        }       
        createEvents(newEvent);
        setTitle("");
        setEventDate(eventDate);
        setStartTime("");
        setEndTime("");
        setDescription("");
        setOpenCreateModal(false);
    }; 
    return(
        <div>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title"><b>Add Event</b></div>
                        <div onClick={()=>setOpenCreateModal(false)} className='close-button'> &times; </div>
                    </div>
                    <form className="modal-body" onSubmit={isSubmit}>
                <div>
                    <label>Event Title</label>
                    <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Event Date</label>
                    <input type='date' value={eventDate} onChange={(e)=>{setEventDate(e.target.value)}}/>
                </div>
                <div>
                    <label>From Time</label>
                    <input type='time' value={startTime} onChange={(e)=>{setStartTime(e.target.value)}}/>
                </div>
                <div>
                    <label>To Time</label>
                    <input type='time' value={endTime} onChange={(e)=>{setEndTime(e.target.value)}}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
            </form>
                    <div className="modal-footer">
                        <button onClick={()=>setOpenCreateModal(false)}>Cancel</button>
                        <button onClick={isSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateModal