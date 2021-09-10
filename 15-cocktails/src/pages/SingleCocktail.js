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

  // In case the id changes
  React.useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      const response = await fetch(`${url}${id}`);
      const data = await response.json()
    }
  }, [id]);

  if (loading) {
    return (
      <React.Fragment>
        <Loading />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <h2>{id}</h2>
    </React.Fragment>
  )
}

export default SingleCocktail
