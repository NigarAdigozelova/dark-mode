import { createContext, useEffect, useState } from "react";

export const MainContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([])

    const values = {
        mode,
        setMode,
        todo,
        setTodo,
        todos,
        setTodos
    
    }
    useEffect(()=>{
        document.body.className=mode;
    },[mode])
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>

    )
}
export default ContextProvider