import LoginRegister from '../Pages/LoginRegister'
import { login } from '../Actions/LoginActions'
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister)