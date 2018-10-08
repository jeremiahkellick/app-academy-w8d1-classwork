import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    const currentUser = this.props.currentUser;
    return this.props.currentUser ? (
      <ul>
        <li>Welcome, {currentUser.username}</li>
        <li><button onClick={this.props.logout}>Logout</button></li>
      </ul>
    ) : (
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    );
  }
}

export default Greeting;
