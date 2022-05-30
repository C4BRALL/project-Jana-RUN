import React from 'react';
import usersData from '../../services/api';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    }
  }

  async componentDidMount() {
    this.setUsers();
  }

  setUsers = async () => {
    const data = await usersData();
    if (data) {
      this.setState({ users: data });
    }
  }

  render() {
    return (

      <>
        <h1>Faça seu login: </h1>
      </>

      // <>
      //   { users.map((user) => (
      //     <ul key={ user._id }>
      //       <li>
      //         {user.name}
      //       </li>
      //     </ul>
      //   )) }
      // </>
    )
  }
};

// const mapStateToProps = (state) => ({
//     name: state.user.name,
//     password: state.user.password,
// });

export default Login;
