import React, { useContext, useEffect } from "react";
import './MainContent.scss';
import { Route, Routes } from "react-router-dom";
import { DataContext } from "../DataContext/DataContext";
import { ServiceContext } from "../DataContext/Services";
import DayInterval from './DayInterval/DayInterval';
import MainCalendar from "./MainCalendar/MainCalendar";
import RightContent from "./RightContent/RightContent";
import ErrorPopUp from "./Modal/ErrorPopUp";
import LeftContent from "./LeftContent/LeftContent";
const MainContent=()=>{
    const {errorPopUp} = useContext(DataContext);
    const {getAllEvent} = useContext(ServiceContext);
    useEffect(()=>{
        getAllEvent();
        // eslint-disable-next-line 
    },[])
    return(
        <div className="content">
            <LeftContent/>
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