import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setToken = async (token) => {
  await cookies.set('token', token);
};

export const getToken = async (ctx) => {
  let token = cookies.get('token');

  //   if (ctx.req && ctx.req.headers.cookie) {
  //     token = ctx.req.headers.cookie.replace(
  //       /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
  //       '$1'
  //     );
  //   }

  return token;
};
