import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import SessionForm from './session_form';

export const login = 'login';

const mapStatetoProps = state => ({
  errors: state.errors,
  formType: login
});

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm);
