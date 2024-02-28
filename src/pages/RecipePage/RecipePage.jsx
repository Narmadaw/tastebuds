import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipePage = () =>{
    const {recipename} = useParams();
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

    const getRecipe = async () =>{
        try{
            const response = await axios.get(`${URL}${recipename}`)
            console.log(response.data)
            setRecipe(response.data.meals[0]);
        }catch(err){
            console.log(err)
        }
    }

    // const extractIngredients = () => {
    //     const newIngredients = [];
    //     Object.keys(recipe).forEach((key) => {
    //         if (key.startsWith("strIngredient") && recipe[key]) {
    //             newIngredients.push(recipe[key]);
    //         }
    //     });
    //     setIngredients(newIngredients);
    // };

    // const extractMeasure = () =>{
    //     const newMeasure = [];
    //     Object.keys(recipe).forEach((key) => {
    //         if (key.startsWith("strMeasure") && recipe[key]) {
    //             newMeasure.push(recipe[key]);
    //         }
    //     });
    //     setMesure(newMeasure);
    // }
    const extractIngredientsAndMeasure = () => {
        const combinedIngredients = [];
    
        Object.keys(recipe).forEach((key) => {
            if (key.startsWith("strIngredient") && recipe[key]) {
                const ingredientNumber = key.replace("strIngredient", "");
                const measureKey = `strMeasure${ingredientNumber}`;
                
                if (recipe[measureKey]) {
                    const ingredientObject = {
                        ingredient: recipe[key],
                        measure: recipe[measureKey],
                    };
    
                    combinedIngredients.push(ingredientObject);
                }
            }
        });
    
        setIngredients(combinedIngredients);
    };
    useEffect(()=>{
        getRecipe();
    }, [recipename])

    useEffect(() => {
        extractIngredientsAndMeasure();
    }, [recipe]);

    return(
        <>
        <section className="l-recipe-page">
            <h1>{recipename}</h1>
            <hr />

            <div className="c-recipe-container">
                <div className="c-recipe-container__image-container">
                    <img src={recipe.strMealThumb} alt="recipe image"/>
                </div>

                {/* recipe tag line */}
                <div className="c-recipe-container__tag-line">
                    <div>
                        <p>Category</p>
                        <p>{recipe.strCategory}</p>
                    </div>
                    <div>
                        <p>Origin</p>
                        <p>{recipe.strArea}</p>
                    </div>
                    <div>
                        <p>Tag</p>
                        <p>{recipe.strTags}</p>
                    </div>
                </div>

                {/* ingredients & measure section */}
                <div className="c-recipe-container__ingredients-measure">
                    <div className="c-recipe-container__ingredients">
                        <h2 className="c-recipe-container__title">Ingredients</h2>
                        <ul>
                            {ingredients && ingredients.map((element, index)=>{
                                return(
                                    <li key={index}>
                                         {element.ingredient} - {element.measure}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                 
                </div>
                <div className="c-recipe-container__instructions">
                    <h2>Instructions</h2>
                      {recipe && recipe.strInstructions && (
                            recipe.strInstructions.split('.').map((sentence, index) => (
                            <p key={index}>{sentence}</p>
                             ))
                        )}

                </div>
                <div>
                    {recipe && recipe.strYoutube && (
                        <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${recipe.strYoutube?.slice(-11)}`}
                        title="YouTube Video"
                        frameBorder="0"
                        allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
          
        </section>
        </>
    )
}

export default RecipePage;