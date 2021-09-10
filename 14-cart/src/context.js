import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'


const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

// Set an initial state which will be manipulated by the reducer function
// Total is the added price and amount is the number of items in the cart
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  // The useReducer hook uses the reducer method as the first argument and the initial state as the first argument
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  // Method to dispatch actions
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // Calling dispatch method is a reference to reducer method 
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  // Method to increase the number of pieces of a particular cart item
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  // Method to decrease the number of pieces of particular cart item 
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  const fetchData = async () => {
    // Dispatch method to display loading when the code is fetching data from the url
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    // Dispatch method to display the data once fetched
    dispatch({ type: 'DISPLAY', payload: cart });
  }

  useEffect(() => {
    fetchData()
  }, []);

  // Pass all state values to the context method [not the setter methods]
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
