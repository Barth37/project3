import React, { Component } from "react";
import SearchForm from "../SearchIngredient/search";
import ResultList from "../List/list";
import API from "../../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: null,
    results2: [{title: '1'}, {title: 1}]
  };

  // When this component mounts, search the Edamam API for pictures of kittens
  componentDidMount() {
    this.searchEdamam("");
  }

  searchEdamam = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Edamam API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEdamam(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />

      </div>
    );
  }
}

export default SearchResultContainer;
