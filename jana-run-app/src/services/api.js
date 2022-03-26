import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000"
});

const usersData = () => {
  const users = api.get('users').then(({ data }) => {
    return data;
  })
  console.log(users);
  return users;
};

export default usersData;
