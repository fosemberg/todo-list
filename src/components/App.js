import React from 'react';
import AddCardForm from './addCardForm/container';
import SortMenu from './sortMenu/container';
import CardList from './cardList/container';

import './ui/APP.scss'

const App = () =>
  <div className="app">
    <SortMenu/>
    <AddCardForm/>
    <CardList/>
  </div>

export default App