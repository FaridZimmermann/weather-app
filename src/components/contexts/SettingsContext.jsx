import React, {createContext} from "react";

const SettingsContext = createContext();

function SettingsProvider(props) {
    const settings = {
        userLanguage: "en",
        tempUnit: "metric"
    }
    return (
        <SettingsContext.Provider value={settings}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext, SettingsProvider};
