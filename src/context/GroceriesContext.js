import React, { createContext, useState, useContext, useEffect } from 'react';
// import { UserContext } from '../context/UserContext.js';
// import { getGroceries } from '../services/groceries.js';
export const GroceriesContext = createContext();
// import GroceriesService from './services/groceries.js';

const GroceriesProvider = (props) => {
  const [groceries, setGroceries] = useState([]);
  //   const { user } = useContext(UserContext);

  //   useEffect(() => {
  //     const fetchGroceries = async () => {
  //       try {
  //         const data = await GroceriesService.getGroceries();
  //         setGroceries(data);
  //       } catch (e) {
  //         console.error(e.message);
  //       }
  //     };
  //     fetchGroceries();
  //   }, [user]);

  const addGrocery = (grocery) => {
    setGroceries([...groceries, grocery]);
  };

  const removeGrocery = (id) => {
    setGroceries(groceries.filter((grocery) => grocery.id !== id));
  };

  return (
    <GroceriesContext.Provider value={{ groceries, addGrocery, removeGrocery }}>
      {props.children}
    </GroceriesContext.Provider>
  );
};

export default GroceriesProvider;
