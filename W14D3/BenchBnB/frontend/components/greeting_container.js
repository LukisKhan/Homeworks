import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStatetoProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchtoProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Greeting);