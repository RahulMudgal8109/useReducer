import { useContext, useReducer, createContext, useEffect } from "react";
import data from "../data"; // Ensure this is the correct path to your data
import reducer from "./reducer"; // Ensure this is the correct path to your reducer

const initialState = {
    employee: [],
    team: [],
     loading: true, // Added loading state
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loadData = (data) => {
        dispatch({ type: "show-data", payload: data });
    };
    const addToTeam=(item)=>{
        dispatch({type:"addToTeam",payload:{item}})

    }
    const removeFromTeam=(item)=>{
        dispatch({type:"removeFromTeam",payload:{item}})

    }
    const sortByAge=(data)=>{
        dispatch({type:"sortByAge",payload:data})
    }

    useEffect(() => {
        loadData(data);
    }, []);

    return (
        <AppContext.Provider value={{ ...state,addToTeam,removeFromTeam,sortByAge}}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
