import React, { useContext } from 'react';
import './Calendar.scss';
import Cell from './Cell';
import { addMonths, addYears, differenceInDays, endOfMonth, format, setDate, startOfMonth,subMonths, subYears } from 'date-fns';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataContext/DataContext';

const Calendar =()=>{
    const {currentDate,setCurrentDate} = useContext(DataContext);
    const startDate = startOfMonth(currentDate);
    const endDate =endOfMonth(currentDate);
    const numOfDays= differenceInDays(endDate,startDate)+1; 
    const prevStartDateGap = startDate.getDay()===0?7:startDate.getDay();
    let check = endDate.getDay();
    if(startDate.getDay()===0){
        (check+=1)
    }
    const afterEndDateGap=check===0?check:7-check;
    const prevMonth=()=>setCurrentDate(subMonths(currentDate,1));
    const nextMonth=()=>setCurrentDate(addMonths(currentDate,1));
    const prevYear=()=>setCurrentDate(subYears(currentDate,1));
    const nextYear=()=>setCurrentDate(addYears(currentDate,1));
    const handleClickDate=(date)=>{
        const clickDate = setDate(currentDate, date);
        setCurrentDate(clickDate);
    }
    const DaysOfWeek =["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
    return(
        <div className='calendar'>
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
            <div className='calendar-view'>
                <div className='calendar-days-of-week'>
                {DaysOfWeek.map((days,index)=><div className='days-of-week' key={index}><Cell>{days}</Cell></div>)}
                </div>
                <div className='calendar-dates'>
                {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cell/></div>)}
                {Array.from({length:numOfDays}).map((days,index)=>{
                    const date = index+1;
                    const isCurrentDate = date===currentDate.getDate();
                    return(
                        <div key={date} onClick={()=>handleClickDate(date)} className="date-cell"><Link to="/days"><Cell isActive={isCurrentDate}>{date}</Cell></Link></div>
                    )})
                }
                {Array.from({length:afterEndDateGap}).map((index)=><div key={index}><Cell/></div>)}
                </div>
            </div>
        </div>
    )
}
export default Calendar