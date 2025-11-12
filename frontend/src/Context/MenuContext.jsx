import { createContext, useState } from "react";
import { product } from "../assets/assets"

// eslint-disable-next-line react-refresh/only-export-components
export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [ products] = useState(product)
    return(
        <MenuContext.Provider value={{products}}>{children}</MenuContext.Provider>
    )
}
export default MenuContextProvider;