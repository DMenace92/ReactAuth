import { L_S, L_L, L_E } from '../Actions/LoginActions'
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate

const initState = {
  log: [],
  logLoading: false,
  logError: false,
}

const LoginReducers = (state = initState, action) => {
  switch (action.type) {
    case L_L:
      return {
        ...state,
        logLoading: true,
        logError: false,
      }
    case L_S:
      window.localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        log: [...state.log, action.payload],
        logLoading: false,
        logError: false,

        // id: action.payload.user.id,
        // username: action.payload.user.username,
        // token: action.payload.token,
      }

    case L_E:
      return {
        ...state,
        logLoading: false,
        logError: true,
      }
    default:
      return state
  }
}

export default LoginReducers