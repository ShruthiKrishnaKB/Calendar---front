import React, { useContext } from 'react';
import './SideCalendar.scss';
import { addMonths, addYears, format,subMonths, subYears } from 'date-fns';
import { DataContext } from '../../DataContext/DataContext';
import Calendar from '../../Calendar/Calendar';
const SideCalendar =()=>{
    const {currentDate,setCurrentDate} = useContext(DataContext);
    const prevMonth=()=>setCurrentDate(subMonths(currentDate,1));
    const nextMonth=()=>setCurrentDate(addMonths(currentDate,1));
    const prevYear=()=>setCurrentDate(subYears(currentDate,1));
    const nextYear=()=>setCurrentDate(addYears(currentDate,1));
    return(
        <div className='side-calendar'>
            <div className='calendar-top-row'>
                <div className='claendar-top-row-month'>
                    <span onClick={prevMonth} className="arrow">{"<"}</span>
                    <span><b>{format(currentDate,"LLLL")}</b></span>
                    <span onClick={nextMonth} className="arrow">{">"}</span>
                </div>
                <div className='calendar-top-row-year'>
                    <span onClick={prevYear} className="arrow">{"<"}</span>
                    <span><b>{format(currentDate,"yyyy")}</b></span>
                    <span onClick={nextYear} className="arrow">{">"}</span>
                </div>
            </div>
            <Calendar/>
        </div>
    )
}
export default SideCalendar