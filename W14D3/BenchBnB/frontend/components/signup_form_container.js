import { connect } from 'react-redux';
import SessionForm from './session_form';

export const signup = 'signup';

const mapStatetoProps = state => ({
  errors: state.errors,
  formType: signup
});

const mapDispatchtoProps = dispatch => ({
  signup: (formUser) => dispatch(signup(formUser))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);