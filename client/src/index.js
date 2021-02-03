import React from 'react'
import './index.css';
import reactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

reactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root'))

