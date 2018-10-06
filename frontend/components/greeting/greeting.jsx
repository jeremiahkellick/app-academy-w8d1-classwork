import React from 'react';

class Greeting extends React.Component {

  render () {
    const currentUser = this.props.currentUser;
    return this.props.currentUser ? (
      <p>
        Welcome, {currentUser}
        <button onClick={this.props.logout}>Logout</button>
      </p>
    ) : (
      <p>
        <Link to='./signup'>Sign Up</Link>
        <Link to='./login'>Login</Link>
      </p>
    );
  }
}

export default Greeting;
