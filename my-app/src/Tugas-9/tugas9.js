import React from 'react';

function form(){
    return (
        <section className="container">
        <h1 className="form"> <b>Form Pembeli Buah</b></h1>
        <form>
          <div className="pelanggan">
            <label><b>Nama Pelanggan</b></label>
            <input className="input" type="text"></input>
          </div>
          
          <div className="radio">
            <input type="checkbox" id="semanka" name="semangka"></input>
            <label for="semangka" >Semangka</label><br></br>
            <input type="checkbox" id="jeruk" name="jeruk"></input>
            <label for="jeruk">Jeruk</label><br></br>
            <input type="checkbox" id="nanas" name="nanas"></input>
            <label for="nanas">nanas</label><br></br>
            <input type="checkbox" id="salak" name="salak"></input>
            <label for="salak">salak</label><br></br>
            <input type="checkbox" id="anggur" name="anggur"></input>
            <label for="anggur">anggur</label><br></br>
          </div>
          <label><b>Daftar Item</b></label> <br></br>
          <button className="button" type="button">Kirim</button>
        </form>
      </section>
    )
}

export default form