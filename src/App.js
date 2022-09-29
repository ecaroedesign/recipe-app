import React, {useEffect, useState} from "react"; 
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "fda13a92";
  const APP_KEY = "70eb4cd9a77527f69dea01d309da1231";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <h1 className="heading">Thousands of recipes at your fingertips!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input 
        type="text" 
        className="search-bar" 
        placeholder="Find a recipe"
        value={search} 
        onChange={updateSearch} 
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}  
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        directions={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
