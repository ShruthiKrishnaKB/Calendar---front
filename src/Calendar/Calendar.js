import React, { useContext } from 'react';
import './Calendar.scss'
import { differenceInDays, endOfMonth, setDate, startOfMonth } from 'date-fns';
import { DataContext } from '../DataContext/DataContext';
import Cells from './Cells';

const Calendar =()=>{
    const {currentDate,setCurrentDate,event} = useContext(DataContext);
    const startDate = startOfMonth(currentDate);
    const endDate =endOfMonth(currentDate);
    const numOfDays= differenceInDays(endDate,startDate)+1; 
    const prevStartDateGap = startDate.getDay()===0?7:startDate.getDay();
    let check = endDate.getDay();
    if(startDate.getDay()===0){
        (check+=1)
    }
    const afterEndDateGap=check===0?check:7-check;
    const handleClickDate=(date)=>{
        const clickDate = setDate(currentDate, date);
        setCurrentDate(clickDate);
    }
    const DaysOfWeek =["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    return(
            <div className='calendar-view'>
                <div className='calendar-days'>
                    {DaysOfWeek.map((days,index)=><div className='calendar-days-of-week' key={index}>{days}</div>)}
                    {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cells/></div>)}
                    {Array.from({length:numOfDays}).map((days,index)=>{
                        const date = index+1;
                        const isCurrentDate = date===currentDate.getDate();
                        const filterEvent = event.filter((filter)=>{
                            return filter.eventDate.slice(0,10)===setDate(currentDate,date).toISOString().slice(0,10);
                        })
                        return(
                            <div key={index} onClick={()=>handleClickDate(date)} className="date-cells">
                                <Cells isActive={isCurrentDate}>
                                    <div className='date-display'>
                                        <div>{date}</div>
                                        <div className='month-view'>
                                            {filterEvent && (filterEvent.length >=3 ? filterEvent.slice(0,2):filterEvent).map((filterItem,index)=>{
                                                const eventTitle = filterItem.eventName;
                                                return(
                                                    <div className='event-month-view-wrapper' key={index}>
                                                    <div className="event-month-view"> {eventTitle.length>15 ? eventTitle.substring(0,14)+"..." : eventTitle}</div>
                                                    </div>
                                                )})}
                                            {filterEvent && filterEvent.length>=3 &&
                                            <div className='see-more'><b>+<span>{filterEvent.length-2}</span> more</b></div>}
                                        </div>
                                    </div>
                                </Cells>
                            </div>
                        )})
                    }
                    {Array.from({length:afterEndDateGap}).map((index)=><div key={index}><Cells/></div>)}
                    </div>
            </div>
    )
}
export default Calendar