import React, {Component} from 'react'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class ShowTable extends Component {
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
                </tr>
                </thead>
              <tbody>
              {
                  dataHargaBuah.map(el=>{
                      return(
                          <tr>
                            <td className="tableBody">{el.nama}</td>
                            <td className="tableBody" >{el.harga}</td>
                            <td className="tableBody">{el.berat / 1000} kg</td>
                          </tr>
                      )
                  })
                }
              </tbody>
              </table>
            </>
        )
    }
}

export default ShowTable