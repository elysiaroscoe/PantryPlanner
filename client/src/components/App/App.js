import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Home from '../Home/Home';

function App() {

  //Products available within app
  const [productCatalog, setProductsCatalog] = useState([]);
  //Products in my pantry
  const [myProducts, setMyProducts] = useState([]);
  //Products on my shopping list
  const [myList, setMyList] = useState([]);


  return (
    <div className="App">
      <Header />

      <Switch>

        <Route path="/List">
          <List />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  )
}

export default App;
