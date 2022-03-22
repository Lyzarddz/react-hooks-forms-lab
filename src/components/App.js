import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

function handleItemSubmit(newItem){
  setItems([newItem, ...items])
}

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleItemSubmit}/>
    </div>
  );
}

export default App;
