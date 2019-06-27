import React from 'react';
import logo from './logo.svg';
import Jumbotron from "./components/jumbotron/style";
import './App.css';
import Form from './components/sign-up/sign-up';
import Login from './components/login/login';
import Search from './components/search-ingr/search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form/>
      <Login/>
      <Search/>
      <Jumbotron/>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//Psuedo code for flow of the app


//Home page renders login button

//Login button which goes to sign-up or sign-in

//Ingredient form search


///Login Page 

//Renders login form and link to sign-up form if not already a user

//Submit button to log in or sign up


///User Page

//Displays button to go to ingredient search page

//Displays saved recipes

///Ingredient search

//Displays input field to perform API call for recipes by clicking submit button

///Results page

//Semantic grid displaying API results with link to view directions 

///Directions page 

//Semantic grid that displays the recipe and directions

//Button to save recipes

