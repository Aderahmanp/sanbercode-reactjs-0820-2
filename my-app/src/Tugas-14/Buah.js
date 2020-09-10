import React from "react"
import {DaftarBuahProvider} from "./DaftarBuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"

const Buah = () => {
    return(
        <DaftarBuahProvider>
            <BuahList/>
            <BuahForm/>
        </DaftarBuahProvider>
    )
}

export default Buah