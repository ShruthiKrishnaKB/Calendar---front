import React, { useContext } from "react";
import './DeleteModal.scss';
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
const DeleteModal = () =>{
    const {isId} = useContext(DataContext);
    const {deleteEvent,setOpenDeleteModal} = useContext(ServiceContext);
    return(
        <div className="delete-modal-background">
            <div className="delete-modal-container">
                <div className="delete-modal-body">
                    Are you sure you want to delete?
                </div>
                <div className="delete-modal-footer">
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                    <button onClick={()=>deleteEvent(isId)}>Yes</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;