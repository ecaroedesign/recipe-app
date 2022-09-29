import React from 'react';

const Recipe = ({title,image,ingredients, directions}) => {
    return(
        <div className="recipe-card">
            <h1 className="recipe-title">{title}</h1>
            <ul className="recipe-text">
                {ingredients.map(ingredient =>(
                    <li className="ingredient">{ingredient.text}</li>
                ))} 
            </ul>
            <a href={directions} target="_blank" className="recipe-link">Directions</a> 
            <img src={image} alt="" className="recipe-img"/>
        </div>
    );
}

export default Recipe;