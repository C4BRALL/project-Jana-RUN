import { VERIFY_LOGIN } from '../actions';

const INITAL_STATE = {
  users: {},
}

const usersReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SUBSCRIBE":
      return {
        ...state,
        name: action.name,
        email: action.email,
      };
      case VERIFY_LOGIN:
        return {
          ...state,
          user: {
            name: action.user.name,
            password: action.user.password,
          }
        }
    default: 
    return state;
  }
};

export default usersReducer;
