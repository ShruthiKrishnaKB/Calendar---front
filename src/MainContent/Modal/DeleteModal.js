import React from "react";
import './DeleteModal.scss';
const DeleteModal = (props) =>{
    console.log("open1")
    const deleteEvent = props.deleteEvent;
    const setOpenDeleteModal=props.setOpenDeleteModal;
    const isDelete = props.isDelete;
    return(
        <div className="delete-modal-background">
            <div className="delete-modal-container">
                <div className="delete-modal-body">
                    Are you sure you want to delete?
                </div>
                <div className="delete-modal-footer">
                    <button onClick={()=>deleteEvent(isDelete)}>Yes</button>
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;