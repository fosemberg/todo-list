import React from 'react';
import {AddColorForm} from './addColorForm/container';
import {SortMenu} from './sortMenu/container';
import {ColorList} from './colorList/container';

import './ui/APP.scss'

const App = () =>
    <div className="app">
        <SortMenu />
        <AddColorForm />
        <ColorList />
    </div>

export default App