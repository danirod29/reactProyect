import React, { createContext, useContext, useState } from "react";


const TareaContext = createContext()

export const TareaProv = ({ children }) =>{
    const [tareas, setTareas] = useState([])

    const addTareas = (tarea) =>{
        setTareas([...tareas, tarea])
    }

    return (
        <TareaContext.Provider value={{tareas, addTareas}}>
            {children}
        </TareaContext.Provider>
    )

}

export const useTarea = () =>{

    return useContext(TareaContext)

}