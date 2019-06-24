import React from "react";
import "./style.css";
import CookBookLogo from './CookBookLogo_Primary.png'

 export default function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Tasty Recipes For Every Ingredient</h1>
      <img src= {CookBookLogo} alt="primary logo"></img>
      <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
        Powered by Recipe Puppy
      </a>
    </div>
  );
}

//export default Jumbotron;
