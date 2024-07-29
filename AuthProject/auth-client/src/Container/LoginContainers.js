import LoginRegister from '../Pages/LoginRegister'
import { login, register } from '../Actions/LoginActions'
import { connect } from 'react-redux'

const mapStateToProps = (log) => {
  return {
    log: log,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (log) => {
      dispatch(login(log))
    },
    register:(log)=>{
      dispatch(register(log))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister)