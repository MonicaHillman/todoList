import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers'
import App from './App'

const store = createStore(rootReducer)

export default class Application extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    )
  }
}