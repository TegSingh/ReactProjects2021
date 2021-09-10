import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  console.log(id);
  // Loading while the data is being loaded
  const [loading, setLoading] = React.useState(false);
  // Variable for a single cocktail based on id in params
  const [cocktail, setCocktail] = React.useState(null);

  const getCocktail = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json()
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name, image, info, category, glass, instructions, ingredients
        }
        setCocktail(newCocktail)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // In case the id changes
  React.useEffect(() => {
    setLoading(true);
    getCocktail()
    setLoading(false)
  }, [id]);

  if (loading) {
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    )
  }
  if (!cocktail) {
    return (
      <React.Fragment>
        <h2 className="section-title">No cocktail to display</h2>
      </React.Fragment>
    )
  }
  const { name, image, info, category, glass, instructions, ingredients } = cocktail

  return (
    <React.Fragment>
      <section className="section cocktail-section">
        <Link to="/" className='btn btn-primary'>
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name: </span>
              {name}
            </p>
            <p>
              <span className="drink-data">Category: </span>
              {category}
            </p>
            <p>
              <span className="drink-data">Info: </span>
              {info}
            </p>
            <p>
              <span className="drink-data">Glass: </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">Instructions: </span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">Ingredients: </span>
              {
                ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}</span> : null
                })
              }
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SingleCocktail
