import axios from 'axios';
import {User, Stats} from '../../typings';

const BASE_URL = 'https://betaapi.imgs.bar';

export async function login(username: string, password: string): Promise<User> {
  const data = await axios.post(
    `${BASE_URL}/v2/auth/login`,
    {
      username,
      password,
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
