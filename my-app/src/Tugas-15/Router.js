import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tugas9 from '../Tugas-9/tugas9'
import Tugas10 from '../Tugas-10/tugas10';
import Tugas11 from '../Tugas-11/timer';
import Tugas12 from '../Tugas-12/FormBuah';
import Tugas13 from '../Tugas-13/FormBuah';
import Tugas14 from '../Tugas-14/Buah';
import Button from '../Tugas-15/Button'

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav  class="navbar">
          <ul>
            <li>
              <Link to="/Tugas-9">Tugas 9</Link>
            </li>
            <li>
              <Link to="/Tugas-10">Tugas 10</Link>
            </li>
            <li>
              <Link to="/Tugas-11">Tugas 11</Link>
            </li>
            <li>
              <Link to="/Tugas-12">Tugas 12</Link>
            </li>
            <li>
              <Link to="/Tugas-13">Tugas 13</Link>
            </li>
            <li>
              <Link to="/Tugas-14">Tugas 14</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          
          <Route exact path="/Tugas-9" component={Tugas9}/>
          <Route exact path="/Tugas-10" component={Tugas10}/>
          <Route exact path="/Tugas-11" component={Tugas11}/>
          <Route exact path="/Tugas-12" component={Tugas12}/>
          <Route exact path="/Tugas-13" component={Tugas13}/>
          <Route exact path="/Tugas-14" component={Tugas14}/>

        </Switch>
        {/* <Button/> */}
      </div>
    </Router>
  );
}

