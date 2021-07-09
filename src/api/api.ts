import axios from 'axios';
import {User, Stats} from '../../typings';

const BASE_URL = 'https://betaapi.imgs.bar';

export async function login(
  username: string,
  password: string,
  rememberMe: boolean
): Promise<User> {
  const data = await axios.post(
    `${BASE_URL}/v2/auth/login`,
    {
      username,
      password,
      rememberMe,
    },
    {withCredentials: true}
  );
  return data.data;
}

export async function register(
  email: string,
  username: string,
  password: string,
  invite: string
): Promise<User> {
  const data = await axios.post(
    `${BASE_URL}/v2/auth/register`,
    {
      email,
      username,
      password,
      invite,
    },
    {withCredentials: true}
  );
  return data.data;
}
export async function getStats(): Promise<Stats> {
  const data = await axios.get(`${BASE_URL}/v2/stats`);
  return data.data;
}

export async function logOut(): Promise<Stats> {
  const data = await axios.get(`${BASE_URL}/v2/auth/logout`, {
    withCredentials: true,
  });
  return data.data;
}

export async function getAuthStatus(): Promise<User> {
  const data = await axios.get(`${BASE_URL}/v2/auth`, {
    withCredentials: true,
  });
  return data.data.user;
}
