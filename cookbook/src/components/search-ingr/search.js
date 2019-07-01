import React from "react";
import "./search.css";

export default class Search extends React.Component {
    state = {
        ingredient: '',
    }

    render() {
        return (
           <div class="ui fluid category search">
  <div class="ui icon input">
    <input class="prompt" id="ingredient-input" type="text" placeholder="search ingredients"/>
    <i class="search icon" id="select-ingredient"></i>
    </div>
  <div class="results"></div>
</div> 
        );
    }

}
