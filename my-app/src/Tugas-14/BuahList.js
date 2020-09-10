import React, {useContext,useState, useEffect} from "react"
import {DaftarBuahContext} from "./DaftarBuahContext"
import axios from "axios"

const BuahList = () => {
    const [daftarBuah, setDaftarBuah, input, setInput] = useContext(DaftarBuahContext)
   
    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [daftarBuah])
      
      const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)
    
        let newdaftarBuah = daftarBuah.filter(el => el.id !== idDataBuah)
    
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => {
          console.log(res)
        })
              
        setDaftarBuah([...newdaftarBuah])
        
      }
      
      const handleEdit = (event) =>{
        let idDataBuah = parseInt(event.target.value)
        let dataBuah = daftarBuah.find(x=> x.id === idDataBuah)
        setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
      }
      return(
          <div>
            <h1 className="title">Daftar Harga Buah</h1>
            <table className="tableBuah">
                <thead>
                <tr>
                    <th className="tableTitle">No</th>
                    <th className="tableTitle">Nama</th>
                    <th className="tableTitle">Harga</th>
                    <th className="tableTitle"> Berat</th>
                    <th className="tableTitle">Aksi</th>
                </tr>
                </thead>
                <tbody>
        
                    {
                    daftarBuah !== null && daftarBuah.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td className="tableBody">{index+1}</td>
                            <td className="tableBody">{item.name}</td>
                            <td className="tableBody">{item.price}</td>
                            <td className="tableBody">{item.weight/1000} Kg</td>
                            <td className="tableBody">
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
          </div>
      )
}

export default BuahList