import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([])

  // Use the Lookup cocktail by name url
  const fetchDrinks = async () => {
    setLoading(true);
    try {
      // Lookup functionality handled by this
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          }
        })
        setCocktails(newDrinks)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])


  // The data passed as value to context provider can be accessed by any component
  return <AppContext.Provider
    value={{
      loading,
      searchTerm,
      cocktails,
      setSearchTerm
    }}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
