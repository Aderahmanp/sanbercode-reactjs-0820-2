import React, {useState, useEffect} from 'react'
import axios from 'axios';

const DaftarBuah = () =>{
    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({
        id: null,
        name: "",
        price: "",
        weight: null
        
    })
  

    useEffect(() => {
        if (dataBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
              setDataBuah(res.data)
            //   console.log(res)
            })
          }
        }, [dataBuah]);

        const submitForm = (event) =>{
            event.preventDefault()

            let body = {
                name:input.inputNama,
                price:input.inputHarga,
                weight: parseInt(input.inputBerat)
            }
            console.log(body)
            if ( input.id === null){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, body)
                .then(res => {
                  var data = res.data
                  console.log(data)
                  setDataBuah([...dataBuah, {
                      id: data.id, 
                      name: data.name,
                      price: data.price,
                      weight: data.weight
                  }])
                  setInput({
                      id: null, 
                      name: "",
                      price: "",
                      weight: null
                  })
                })
            } else {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, body)
                .then(res => {
                  var deleteDataBuah = dataBuah.map(x => {
                    if (x.id === input.id){
                      x.name = input.name
                    }
                    return x
                  })
                  setDataBuah(deleteDataBuah)
                  setInput({id: null, name: ""})
                }) 
            }
            
 
          }
        
        const deleteBuah = (event) => {
            var ID_FRUIT = parseInt(event.target.value)
            console.log(ID_FRUIT)
            axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`)
            .then(res => {
                var deleteDataBuah = dataBuah.filter(x => x.id !== ID_FRUIT)
                setDataBuah(deleteDataBuah)
            })
        }

        const editData = (event) => {
            var ID_FRUIT = parseInt(event.target.value)
            var buah = dataBuah.find(x=> x.id === ID_FRUIT)

            setInput({
                id: ID_FRUIT,
                name: buah.name,
                price: buah.price,
                weight: buah.weight    
            })
        }

        const changeInputNama = (event) => {
            var value = event.target.value
            console.log(value)
            setInput({...input, inputNama:value})
        }

       const changeInputHarga = (event) => {
            var value = event.target.value
            setInput({...input, inputHarga:value})
        }

        const changeInputBerat = (event) => {
            var value = event.target.value
            setInput({...input, inputBerat:value})
        }
        return (
            <>
              <h1 className="title">Table Harga Buah</h1>
              <table className="tableBuah" >
                <thead>
                <tr>
                  <th className="tableTitle">Nama</th>
                  <th className="tableTitle">Harga</th>
                  <th className="tableTitle" >Berat</th>
                  <th className="tableTitle" >Action</th>
                </tr>
                </thead>
              <tbody>
              {
                  dataBuah !== null && dataBuah.map((el, index)=>{
                      return(
                          <tr key={el.id}>
                            <td className="tableBody">{el.name}</td>
                            <td className="tableBody" >{el.price}</td>
                            <td className="tableBody">{el.weight / 1000} kg</td>
                            <td className="tableBody">
                                <button value={el.id}  onClick={editData}>Edit</button>
                                <button value={el.id} onClick={deleteBuah}>Delete</button>
                            </td>
                          </tr>
                      )
                  })
                }
              </tbody>
              </table>
              <br/>
              <br/>
              <form className="formBuah" onSubmit={submitForm}>
               <h2 className="titleForm">Form Buah</h2>
              <strong >Nama</strong>
              <input required type="text" className="namaBuah" value={input.inputNama} onChange={changeInputNama}/> <br/>
              <strong >Harga</strong>
              <input required type="text" className="hargaBuah" value={input.inputHarga} onChange={changeInputHarga}/> <br/>
              <strong >Berat</strong>
              <input required type="number" className="beratBuah" value={input.inputBerat} onChange={changeInputBerat}/> <br/>
              <button className="save" >Save</button>
          </form>

            </>
        )
}





// class ShowTable extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dataHargaBuah : [
//                 {nama: "Semangka", harga: 10000, berat: 1000},
//                 {nama: "Anggur", harga: 40000, berat: 500},
//                 {nama: "Strawberry", harga: 30000, berat: 400},
//                 {nama: "Jeruk", harga: 30000, berat: 1000},
//                 {nama: "Mangga", harga: 30000, berat: 500}
//               ],
//             inputNama : "",
//             inputHarga : "",
//             inputBerat: "",
//             index: -1    
//         }
//         console.log(this.state.dataHargaBuah)
//           this.submitForm = this.submitForm.bind(this);
//     }
    
  

//     submitForm  (event)  {
//         event.preventDefault()

//         let buahBaru = {
//             nama:this.state.inputNama,
//             harga: parseInt(this.state.inputHarga),
//             berat: parseInt(this.state.inputBerat)
//         }

//         console.log(buahBaru)
//         var index = this.state.index
//         if ( index === -1) {
//             this.setState({
//                 dataHargaBuah : this.state.dataHargaBuah.concat(buahBaru),
//                 inputNama :  "",
//                 inputHarga : "",
//                 inputBerat : ""
//             })
//         } else {
//             var updateHargaBuah = this.state.dataHargaBuah
//             console.log(updateHargaBuah)
//             updateHargaBuah[index] = {
//                 nama:this.state.inputNama,
//                 harga: parseInt(this.state.inputHarga),
//                 berat: parseInt(this.state.inputBerat)
//             }
         
//             this.setState({
//                 dataHargaBuah: [...updateHargaBuah],
//                 index: -1,
//                 inputNama :  "",
//                 inputHarga : "",
//                 inputBerat : ""
//             })
//         }
        
//     }

//     deleteData = (event) => {
//         var index = event.target.value
//         var updateHargaBuah = this.state.dataHargaBuah
//         updateHargaBuah.splice(index, 1)
//         this.setState({
//             dataHargaBuah: [...updateHargaBuah],
//                             index: -1,
//                 inputNama :  "",
//                 inputHarga : "",
//                 inputBerat : ""
//         })
//     }

//     changeInputNama = (event) => {
//         var value = event.target.value
//         this.setState({inputNama:value})
//     }

//     changeInputHarga = (event) => {
//        var value = event.target.value
//        this.setState({inputHarga:value})
//     }

//     changeInputBerat = (event) => {
//         var value = event.target.value
//         this.setState({inputBerat:value})
//     }

//     editData = (event) => {
//         var index = event.target.value
//         var dataBuah = this.state.dataHargaBuah[index]
//         this.setState({
//             inputNama:dataBuah.nama,
//             inputHarga:dataBuah.harga,
//             inputBerat:dataBuah.berat,
//             index
//         })
//     }
//     render() {
//         return (
//             <>
//               <h1 className="title">Table Harga Buah</h1>
//               <table className="tableBuah" >
//                 <thead>
//                 <tr>
//                   <th className="tableTitle">Nama</th>
//                   <th className="tableTitle">Harga</th>
//                   <th className="tableTitle" >Berat</th>
//                   <th className="tableTitle" >Action</th>
//                 </tr>
//                 </thead>
//               <tbody>
//               {
//                   this.state.dataHargaBuah.map((el, index)=>{
//                       return(
//                           <tr key={index}>
//                             <td className="tableBody">{el.nama}</td>
//                             <td className="tableBody" >{el.harga}</td>
//                             <td className="tableBody">{el.berat / 1000} kg</td>
//                             <td className="tableBody">
//                                 <button value={index}  onClick={this.editData}>Edit</button>
//                                 <button value={index} onClick={this.deleteData}>Delete</button>
//                             </td>
//                           </tr>
//                       )
//                   })
//                 }
//               </tbody>
//               </table>
//               <br/>
//               <br/>
//               <form className="formBuah" onSubmit={this.submitForm}>
//                <h2 className="titleForm">Form Buah</h2>
//               <strong >Nama</strong>
//               <input required type="text" className="namaBuah" value={this.state.inputNama} onChange={this.changeInputNama}/> <br/>
//               <strong >Harga</strong>
//               <input required type="number" className="hargaBuah" value={this.state.inputHarga} onChange={this.changeInputHarga}/> <br/>
//               <strong >Berat</strong>
//               <input required type="number" className="beratBuah" value={this.state.inputBerat} onChange={this.changeInputBerat}/> <br/>
//               <button className="save" >Save</button>
//           </form>

//             </>
//         )
//     }
// }

export default DaftarBuah