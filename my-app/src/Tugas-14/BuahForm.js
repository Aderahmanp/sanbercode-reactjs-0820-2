import React, {useState, useContext} from "react"
import {DaftarBuahContext} from "./DaftarBuahContext"
import axios from "axios"

const BuahList = () => {
    const [daftarBuah, setDaftarBuah, input, setInput] = useContext(DaftarBuahContext)
    const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "name":
          {
            setInput({...input, name: event.target.value});
            break
          }
          case "price":
          {
            setInput({...input, price: event.target.value});
            break
          }
          case "weight":
          {
            setInput({...input, weight: event.target.value});
              break
          }
        default:
          {break;}
        }
      }
    
      const handleSubmit = (event) =>{
        // menahan submit
        event.preventDefault()
    
        let name = input.name
        let price = input.price.toString()
        
    
        if (input.id === null){        
          axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: input.weight})
          .then(res => {
              setDaftarBuah([
                ...daftarBuah, 
                { id: res.data.id, 
                  name, 
                  price,
                  weight: input.weight
                }])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, price, weight: input.weight})
          .then(() => {
              let dataBuah = daftarBuah.find(el=> el.id === input.id)
              dataBuah.name = name
              dataBuah.price = price
              dataBuah.weight = input.weight
              setDaftarBuah([...daftarBuah])
          })
        }
    
        // reset input form to default
        setInput({name: "", price: "", weight: 0, id: null})
    
      }
      return(
        <>
        <h1  lassName="titleForm"  >Form Daftar Harga Buah</h1>
        <div >
          <div >
            <form  className="formBuah" onSubmit={handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input type="text" required name="name" value={input.name} onChange={handleChange}/>
              <br/>
              <br/>
              <label >
                Harga:
              </label>
              <input  type="text" required name="price" value={input.price} onChange={handleChange}/>
              <br/>
              <br/>
              <label >
                Berat (dalam gram):
              </label>
              <input  type="number" required name="weight" value={input.weight} onChange={handleChange}/>
              <br/>
              <br/>
              <div >
                <button >submit</button>
              </div>
            </form>
          </div>
        </div>
        </>

      )
}

export default BuahList