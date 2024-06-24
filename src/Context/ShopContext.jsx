import React, {createContext} from 'react'
import productData from '../Components/Data'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    const contextValue = {productData}

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;