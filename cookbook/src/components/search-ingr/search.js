import React from 'react';
import './search.css';

export default class Search extends React.Component {
    state = {
        ingredient: '',
    }

    render() {
        return (
            <form class="search">
            <p>Search by Ingredient</p>
            <div class="ui input">
                <input type="text" placeholder="Ingredient" value={this.state.ingredient}/>
            </div>
            </form>
        );
    }

}