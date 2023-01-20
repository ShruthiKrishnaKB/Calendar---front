import React, { useContext, useEffect } from "react";
import MonthCalendar from "./LeftContent/MonthCalendar";
import DayInterval from './DayInterval/DayInterval';
import './MainContent.scss';
import Axios from "./Axios/Axios";
import MainCalendar from "./MainCalendar/MainCalendar";
import { Route, Routes } from "react-router-dom";
import RightContent from "./RightContent/RightContent";
import { DataContext } from "../DataContext/DataContext";
import ErrorPopUp from "./Modal/ErrorPopUp";
const MainContent=()=>{  

    const {event,setEvent,errorPopUp} = useContext(DataContext);
    const retrieveEvents = async ()=>{
            const response =  await Axios.get("api/appointments");
            return response.data;
    }
    useEffect(()=>{
        const getAllEvent = async () => {
            const getAllEvents = await retrieveEvents();
            getAllEvents && setEvent(getAllEvents,...event);
        }
        getAllEvent();
        // eslint-disable-next-line 
    },[event])
    return(
        <div className="content">
            <MonthCalendar/>
            <Routes>
                <Route exact path="/" element={<MainCalendar/>} />
                <Route exact path="/days" element={<DayInterval/>} />
            </Routes>
            <RightContent/>
            {errorPopUp && <ErrorPopUp/>}
        </div>
    );
}
export default MainContent