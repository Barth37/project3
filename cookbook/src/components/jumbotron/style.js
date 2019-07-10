import React from "react";
import "./style.css";
import CookBookLogo from './CookBookLogo_Primary_red.png'

 export default function Jumbotron() {
  return (
    <div className="jumbotron text-center" id="primaryLogo">
      {/* <img class="ui fluid image" id="primaryLogo" src= {CookBookLogo} alt="primary logo"></img> */}
      <img class="primary" src= {CookBookLogo} alt="primary logo"></img>

     
    </div>
  );
}

//export default Jumbotron;
