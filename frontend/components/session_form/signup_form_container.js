import SessionForm from './session_form';
import { signup } from  '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: 'Sign Up',
  errors: state.errors.session
});

export default connect(mapStateToProps, { processForm: signup })(SessionForm);
