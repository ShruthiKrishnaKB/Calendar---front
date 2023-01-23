import React, { createContext, useState } from "react";
const DataContext = createContext();
const DataContextProvider = ({children}) =>{
    const [currentDate, setCurrentDate]=useState(new Date());
    const [event,setEvent]=useState([]);
    const [openCreateModal,setOpenCreateModal]=useState(false);
    const [errorPopUp,setErrorPopUp] = useState('');
    const [isId,setIsId] = useState('');
    const [isEditEvent,setIsEditEvent]=useState(false);
    return(
        <DataContext.Provider value={{currentDate,setCurrentDate,event,setEvent,openCreateModal,setOpenCreateModal,errorPopUp,setErrorPopUp,isId,setIsId,isEditEvent,setIsEditEvent}}>
            {children}
        </DataContext.Provider>
    )
}
export {DataContext,DataContextProvider}