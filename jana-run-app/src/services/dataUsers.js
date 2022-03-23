const URL = 'http://localhost:5000/api/users';

// export const getUsers = async () => {
//   await fetch(URL)
//   .the(response => response.json())
//   .then(data => data.JSON.stringify(data))
//   .catch(error => console.error(error))
// };

export const getUsers = async () => {
  const request = await fetch(URL);
  const data = await request.json();
  return data.users;
};
