import React, { createContext, useContext, useState } from "react";
import { formatISO, parseISO } from "date-fns";
import moment from "moment";
import uuid from "react-uuid";
import Axios from "../MainContent/Axios/Axios";
import { DataContext } from "./DataContext";
const ServiceContext =  createContext();
const ServiceContextProvider = ({children})=>{
    const {event,setEvent,setErrorPopUp,isEditEvent,currentDate} = useContext(DataContext);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [getByDate,setGetByDate]= useState('');
    const getAllEvent = async () => {
        const response =  await Axios.get("api/appointments");
        response && setEvent(response.data,...event);
    }
    const getAllEventByDate = async (date) => {
        const response =await Axios.get("api/appointments/date?date="+date);
        response && setGetByDate(response.data);
    }
    const deleteEvent= async (delId)=>{
        await Axios.delete(`api/appointments/${delId}`)
        getAllEvent()  && getAllEventByDate(moment(currentDate,"DD-MM-YYYY").format("YYYY-MM-DD"));
        setOpenDeleteModal(false);
    }
    const editEvent = async (myEvent)=>{
        try{
            const request = {
                id:isEditEvent[0].id,
                eventName : myEvent.eventName,
                eventDate:formatISO(parseISO(myEvent.eventDate)),
                startTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.startTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),
                endTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.endTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),    
                descriptionOfEvent:myEvent.descriptionOfEvent, 
            }
            await Axios.put("api/appointments",request);
            getAllEvent() && getAllEventByDate(moment(currentDate,"DD-MM-YYYY").format("YYYY-MM-DD"));
        }catch(error){
            setErrorPopUp(error.response.data);
        }
    }
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
            response.data && getAllEvent() && getAllEventByDate(moment(currentDate,"DD-MM-YYYY").format("YYYY-MM-DD"));
        }
        catch(error){
            setErrorPopUp(error.response.data);
        }
    }
    return(
        <ServiceContext.Provider value={{getAllEvent,deleteEvent,setOpenDeleteModal,openDeleteModal,editEvent,createEvents,getAllEventByDate,getByDate,setGetByDate}}>
            {children}
        </ServiceContext.Provider>
    )
}
export {ServiceContext,ServiceContextProvider}