import './RightContent.scss';
import React, { useContext } from 'react';
import CreateModal from '../Modal/CreateModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListAppointment from './ListAppointment';
import { DataContext } from '../../DataContext/DataContext';
const RightContent=()=>{
    const {openCreateModal,setOpenCreateModal} = useContext(DataContext);
    return(
    <div className='right-content'>
        <div><button className='primary-button' onClick={()=>setOpenCreateModal(true)}>
            <span><b>Create</b></span>
            <FontAwesomeIcon icon={faPlus} className="icon"></FontAwesomeIcon></button>
        </div>
        {openCreateModal&&<CreateModal/>}
        <div className='list-appointment'>
            <ListAppointment/>
        </div>
    </div>
    )
}
export default RightContent