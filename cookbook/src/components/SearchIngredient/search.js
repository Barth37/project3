import React from "react";
import "./search.css";

function SearchForm(props) {
    return (
      <form>

        <div class="ui icon input">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            
            placeholder="Search Ingredients"
            id="search"
          />
        </div>

 
         <div>
          <button onClick={props.handleFormSubmit} class="ui button" id="searchBtn">
             Search
           </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
