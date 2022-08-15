import { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export const ButtonProvider = ({children}) =>{
    const [isClicked, setIsClicked] = useState([{ isButtonClicked: false, index: 0 }, { isButtonClicked: false, index: 1 }, { isButtonClicked: false, index: 2 }]);
    return(
        <ButtonContext.Provider value = {{isClicked, setIsClicked}}>
            {children}
        </ButtonContext.Provider>
    )
}
export const useButtonContext = () => useContext(ButtonContext)