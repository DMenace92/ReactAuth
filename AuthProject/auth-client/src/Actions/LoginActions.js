export const L_S = 'L_S'
const loginSuccess = (log) => ({ type: L_S, payload: log })

export const L_L = 'L_L'
const loginLoading = () => ({ type: L_L })

export const L_E = 'L_E'
const loginError = (err) => ({ type: L_E, payload: err })


export const R_S = 'R_S'
const registerSuccess = (log) => ({ type: R_S, payload: log })

export const R_L = 'R_L'
const registerLoading = () => ({ type: R_L })

export const R_E = 'R_E'
const registerError = (err) => ({ type: R_E, payload: err })

export const L_O = 'L_O'

export const login = (log) => (dispatch) => {
  dispatch(loginLoading())
  fetch(`http://localhost:9000/admin/login`, {
    method: 'POST',
    body: JSON.stringify(log),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((log) => {
      dispatch(loginSuccess(log))
    })
    .catch((err) => {
      dispatch(loginError())
    })
}

export const register = (log) => (dispatch) => {
    dispatch(registerLoading())
    fetch(`http://localhost:9000/admin/register`, {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((log) => {
        dispatch(registerSuccess(log))
      })
      .catch((err) => {
        dispatch(registerError())
      })
  }
