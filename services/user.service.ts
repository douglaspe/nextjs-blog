import { Api } from 'services';

class User {
  static async post(user) {
    try {
      const response = await Api.post('/api/register', user);

      return response;
    } catch (err) {
      return err;
    }
  }

  static async authenticate(user) {
    try {
      const response = await Api.post('/api//authenticate', user);
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default User;
