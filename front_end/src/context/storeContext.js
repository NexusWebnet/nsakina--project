import { createContext } from "react";
import { storeList } from "../asset/asset";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const contextValue = {
      storeList 
    }
    
return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider;