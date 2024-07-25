import { createStore, applyMiddleware } from 'redux'
// import { configureStore, applyMiddleware, createSlice } from '@reduxjs/toolkit'
import RootReducers from './Reducers/RootReducers'
import {thunk} from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store