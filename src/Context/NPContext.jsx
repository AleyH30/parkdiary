import React, {createContext, useState} from "react";

export const NPContext = createContext(null);

const NPContextProvider = (props) => {
    const [contextData, setContextData] = useState('');
    const [contextSearchTerm, setContextSearchTerm] = useState('');

    const ChangeContextData = (newData) => {
        setContextData(newData)
    }
    const GetContextData = () => {
        return contextData;
    }
    const ChangeContextSearchTerm = (newSearchTerm) => {
        setContextSearchTerm(newSearchTerm);
    }
    const GetContextSearchTerm = () => {
        return contextSearchTerm;
    }

    const contextValue = { ChangeContextData, GetContextData, ChangeContextSearchTerm, GetContextSearchTerm }

    return (
        <NPContext.Provider value={contextValue}>
            {props.children}
        </NPContext.Provider>
    )
}

export default NPContextProvider
