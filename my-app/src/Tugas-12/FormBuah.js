import React, {Component} from 'react'



class ShowTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            inputNama : "",
            inputHarga : "",
            inputBerat: "",
            index: -1    
        }
        console.log(this.state.dataHargaBuah)
          this.submitForm = this.submitForm.bind(this);
    }
    
  

    submitForm  (event)  {
        event.preventDefault()

        let buahBaru = {
            nama:this.state.inputNama,
            harga: parseInt(this.state.inputHarga),
            berat: parseInt(this.state.inputBerat)
        }

        console.log(buahBaru)
        var index = this.state.index
        if ( index === -1) {
            this.setState({
                dataHargaBuah : this.state.dataHargaBuah.concat(buahBaru),
                inputNama :  "",
                inputHarga : "",
                inputBerat : ""
            })
        } else {
            var updateHargaBuah = this.state.dataHargaBuah
            console.log(updateHargaBuah)
            updateHargaBuah[index] = {
                nama:this.state.inputNama,
                harga: parseInt(this.state.inputHarga),
                berat: parseInt(this.state.inputBerat)
            }
         
            this.setState({
                dataHargaBuah: [...updateHargaBuah],
                index: -1,
                inputNama :  "",
                inputHarga : "",
                inputBerat : ""
            })
        }
        
    }

    deleteData = (event) => {
        var index = event.target.value
        var updateHargaBuah = this.state.dataHargaBuah
        updateHargaBuah.splice(index, 1)
        this.setState({
            dataHargaBuah: [...updateHargaBuah],
                            index: -1,
                inputNama :  "",
                inputHarga : "",
                inputBerat : ""
        })
    }

    changeInputNama = (event) => {
        var value = event.target.value
        this.setState({inputNama:value})
    }

    changeInputHarga = (event) => {
       var value = event.target.value
       this.setState({inputHarga:value})
    }

    changeInputBerat = (event) => {
        var value = event.target.value
        this.setState({inputBerat:value})
    }

    editData = (event) => {
        var index = event.target.value
        var dataBuah = this.state.dataHargaBuah[index]
        this.setState({
            inputNama:dataBuah.nama,
            inputHarga:dataBuah.harga,
            inputBerat:dataBuah.berat,
            index
        })
    }
    render() {
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
                  this.state.dataHargaBuah.map((el, index)=>{
                      return(
                          <tr key={index}>
                            <td className="tableBody">{el.nama}</td>
                            <td className="tableBody" >{el.harga}</td>
                            <td className="tableBody">{el.berat / 1000} kg</td>
                            <td className="tableBody">
                                <button value={index}  onClick={this.editData}>Edit</button>
                                <button value={index} onClick={this.deleteData}>Delete</button>
                            </td>
                          </tr>
                      )
                  })
                }
              </tbody>
              </table>
              <br/>
              <br/>
              <form className="formBuah" onSubmit={this.submitForm}>
               <h2 className="titleForm">Form Buah</h2>
              <strong >Nama</strong>
              <input required type="text" className="namaBuah" value={this.state.inputNama} onChange={this.changeInputNama}/> <br/>
              <strong >Harga</strong>
              <input required type="number" className="hargaBuah" value={this.state.inputHarga} onChange={this.changeInputHarga}/> <br/>
              <strong >Berat</strong>
              <input required type="number" className="beratBuah" value={this.state.inputBerat} onChange={this.changeInputBerat}/> <br/>
              <button className="save" >Save</button>
          </form>

            </>
        )
    }
}

export default ShowTable