import React, { createContext, useState } from "react";
const DataContext = createContext();
const DataContextProvider = ({children}) =>{
    const [currentDate, setCurrentDate]=useState(new Date());
    const [event,setEvent]=useState([]);
    const [openCreateModal,setOpenCreateModal]=useState(false);
    const [errorPopUp,setErrorPopUp] = useState('');

    return(
        <DataContext.Provider value={{currentDate,setCurrentDate,event,setEvent,openCreateModal,setOpenCreateModal,errorPopUp,setErrorPopUp}}>
            {children}
        </DataContext.Provider>
    )
}
export {DataContext,DataContextProvider}