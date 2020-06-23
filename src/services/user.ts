import axios from 'axios';

export function post(user) {
  axios
    .post('https://jsonplaceholder.typicode.com/users', { user })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    });
}
