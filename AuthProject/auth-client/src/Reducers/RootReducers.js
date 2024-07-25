import { combineReducers } from 'redux'
import LoginReducers from './LoginReducers'
const RootReducers = combineReducers({
    log:LoginReducers
})

export default RootReducers