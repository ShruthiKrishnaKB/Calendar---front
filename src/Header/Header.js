import {  useContext, useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';
import { Link,useLocation } from 'react-router-dom';
import { DataContext } from '../DataContext/DataContext';
const Header=()=>{
    const location = useLocation();
    const [navigate,setNavigate]=useState(false);
    const {currentDate,setCurrentDate} = useContext(DataContext)
    const isDay = location.pathname==="/days";
    const prev=()=>isDay ? setCurrentDate(subDays(currentDate,1)):setCurrentDate(subMonths(currentDate,1));
    const next=()=>isDay ? setCurrentDate(addDays(currentDate,1)):setCurrentDate(addMonths(currentDate,1));
    const ButtonName=()=>isDay ? "Day" : "Month"
    const handleClickNavigation=()=>setNavigate(!navigate);
    return(
        <div className="header">
            <div><h2>Scheduler</h2></div>
            <div><button onClick={prev} className="primary-button">Previous</button></div>
            <div className='current-month'><h2>{format(currentDate,"LLLL yyyy")}</h2></div>
            <div><button onClick={next} className="primary-button">Next</button></div>
            <div className='view-button'>
                <button onClick={handleClickNavigation} className="primary-button">{ButtonName()}<FontAwesomeIcon icon={faAngleDown} className="down-arrow-icon"/></button>
                <div className={navigate?"list-open":"none"}>
                    <Link to="/"><li onClick={handleClickNavigation}>Month</li></Link>
                    <Link to="/days"><li onClick={handleClickNavigation}>Day</li></Link>
                </div>
            </div>
        </div>
    )
}
export default Header;