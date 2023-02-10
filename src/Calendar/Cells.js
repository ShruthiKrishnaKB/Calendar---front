import React, { useContext } from "react";
import './Cells.scss';
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext/DataContext";
const Cells=(props)=>{
    const isActive = props.isActive;
    const {setOpenCreateModal} = useContext(DataContext);
    return(
        <div className= {isActive?"selected-cells":"cells"} onDoubleClick={()=>setOpenCreateModal(true)}>
            <Link to="/days">{props.children}</Link>
        </div>
    )
}
export default Cells