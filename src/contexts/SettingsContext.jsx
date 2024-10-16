import React, {useState, createContext} from "react";

const SettingsContext = createContext();

function SettingsProvider(props) {

    const [userLanguage, setUserLanguage] = useState("en");
    const [tempUnit, setTempUnit] = useState("metric");

    const settings = {
        userLanguage,
        tempUnit,
        setUserLanguage,
        setTempUnit
    }
    return (
        <SettingsContext.Provider value={settings}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext, SettingsProvider};
