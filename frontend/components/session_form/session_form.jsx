import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state))
      .then(() => this.props.history.push("/"));
  }

  render () {
    const { name, errors } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{name}</h1>
        <ul>
          { errors.map(error => <li>{error}</li>) }
        </ul>
        <label>Username:
          <input type="text" onChange={this.update('username')} />
        </label><br />
        <label>Password:
          <input type="password" onChange={this.update('password')} />
        </label><br />
        <input type="submit" value={name} />
      </form>
    );
  }
}

export default withRouter(SessionForm);
