import React, { useContext } from 'react';
import './RightContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../DataContext/DataContext';
import CreateUpdateModal from '../Modal/CreateUpdateModal';
import ListAppointment from './ListAppointment';
const RightContent=()=>{
    const {openCreateModal,setOpenCreateModal} = useContext(DataContext);
    return(
    <div className='right-content'>
        <div><button className='primary-button' onClick={()=>setOpenCreateModal(true)}>
            <span><b>Create</b></span>
            <FontAwesomeIcon icon={faPlus} className="icon"></FontAwesomeIcon></button>
        </div>
        {openCreateModal&&<CreateUpdateModal/>}
        {/* <div className='search-bar'>
            <div><FontAwesomeIcon icon={faMagnifyingGlass}  className="icon"></FontAwesomeIcon></div>
            <div><input type="search" placeholder='Search'/></div>
        </div> */}
        <div className='list-appointment'>
            <ListAppointment/>
        </div>
    </div>
    )
}
export default RightContent