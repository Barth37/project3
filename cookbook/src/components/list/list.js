import React from 'react';
import './list.css';

function ResultList(props) {
    return (
        <div class="ui vertical segments" id="resultCard">
            {props.results && props.results.hits.map(result => (
                <div class="ui vertical segment" key={result.id}>
                    <h2>{result.recipe.label}</h2>
                    <img alt={result.recipe.label} className="ui centered large image" src={result.recipe.image} />
                    <br></br>
                    <a href={result.recipe.url}>View Recipe</a>
                    <div class="ui list">
                        <div class="item">
                            {result.recipe.healthLabels.map((item) => (<li>{item}</li>))}
                        </div>
                        <div class="ui divider"></div>
                        <button class="ui inverted button" id="save">Save Recipe</button>
                    </div>
                </div>
            ))}
            {props.results && console.log(props.results)}
        </div>
    );
}

export default ResultList;