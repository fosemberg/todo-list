import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

console.log('version:', '0.1.0')

window.React = React
window.store = store

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)