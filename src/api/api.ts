import axios from 'axios';
import {User, Stats} from '../../typings';

export async function login(username: string, password: string): Promise<User> {
  const data = await axios.post(
    'http://localhost:8080/v2/auth/login',
    {
      username,
      password,
    },
    {withCredentials: true}
  );
  return data.data;
}

export async function getStats(): Promise<Stats> {
  const data = await axios.get('http://localhost:8080/v2/stats');
  return data.data;
}

export async function logOut(): Promise<Stats> {
  const data = await axios.get('http://localhost:8080/v2/auth/logout', {
    withCredentials: true,
  });
  return data.data;
}
