import React from 'react';
import './list.css';

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results && props.results.hits.map(result => (
        <li className="list-group-item" key={result.id}>
            <h2>{result.recipe.label}</h2>
            <img alt={result.recipe.label} className="img-fluid" src={result.recipe.image} />
            <a href={result.recipe.url}>View Recipe</a>
            <h4>{result.recipe.healthLabels}</h4>
        </li>
      ))}
      {props.results && console.log(props.results)}
    </ul>
  );
}

export default ResultList;