import React from "react";
import "./search.css";

// export default function Searchbar() {
//     return (
// <div class="ui fluid category search">
//   <div class="ui icon input">
//     <input class="prompt" type="text" placeholder="Search animals...">
//     <i class="search icon"></i>
//   </div>
//   <div class="results"></div>
// </div> 

export default class Search extends React.Component {
    state = {
        ingredient: '',
    }

    render() {
        return (
           <div class="ui fluid category search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="search ingredients"/>
    <i class="search icon"></i>
    </div>
  <div class="results"></div>
</div> 
        );
    }

}
