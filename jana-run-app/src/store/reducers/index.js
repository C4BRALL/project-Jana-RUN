import { combineReducers } from 'redux';
import subscribe from './subscribeReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  users,
  subscribe,
});

export default rootReducer;
