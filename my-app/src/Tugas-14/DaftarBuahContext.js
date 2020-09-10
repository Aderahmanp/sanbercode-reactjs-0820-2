import React, {useState, createContext } from "react"

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = props => {
    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState({
        name: "",
        price: "", 
        weight: 0, 
        id: null
    })

    return (
        <DaftarBuahContext.Provider value={[daftarBuah, setDaftarBuah, input, setInput]}>
            {props.children}
        </DaftarBuahContext.Provider>
    )
}


  