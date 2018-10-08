import SessionForm from './session_form';
import { login } from  '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: 'Login',
  errors: state.errors.session
});

export default connect(mapStateToProps, { processForm: login })(SessionForm);
