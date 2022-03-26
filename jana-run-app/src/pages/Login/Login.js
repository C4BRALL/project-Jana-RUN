import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    const { name, password } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <p>{password}</p>
      </>
    )
  }
};

const mapStateToProps = (state) => ({
    name: state.user.name,
    password: state.user.password,
});

export default connect(mapStateToProps)(Login);
