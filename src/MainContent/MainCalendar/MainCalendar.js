import React, { useContext } from 'react';
import { differenceInDays, endOfMonth, setDate, startOfMonth} from 'date-fns';
import './MainCalendar.scss'
import Cells from './Cells';
import { DataContext } from '../../DataContext/DataContext';
const MainCalendar =()=>{
    const {event, currentDate,setCurrentDate} = useContext(DataContext);
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
        <div className='main-calendar'>
            <div className='main-calendar-view'>
                <div className='main-calendar-days'>
                    {DaysOfWeek.map((days,index)=><div className='main-calendar-days-of-week' key={index}>{days}</div>)}
                    {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cells/></div>)}
                    {Array.from({length:numOfDays}).map((days,index)=>{
                        const date = index+1;
                        const isCurrentDate = date===currentDate.getDate();
                        return(
                            <div key={date} onClick={()=>handleClickDate(date)}  className="date-cells">
                                <Cells isActive={isCurrentDate}>
                                    <div className='date-display'>
                                        <div>{date}</div>
                                        <div>{event.map((item,key)=>{
                                            return(
                                                <li index={key} className="event-month-view">{ item.eventDate.slice(0,10)===setDate(currentDate,date).toISOString().slice(0,10) ? item.eventName : undefined}</li>
                                            )})}
                                        </div>
                                    </div>
                                </Cells>
                            </div>
                        )})
                    }
                    {Array.from({length:afterEndDateGap}).map((index)=><div key={index}><Cells/></div>)}
                </div>
            </div>
        </div>
    )
}
export default MainCalendar