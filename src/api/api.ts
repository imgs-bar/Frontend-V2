import axios from 'axios';
import {User, Stats, booleanSetting} from '../../typings';

export const BASE_URL = 'https://betaapi.imgs.bar/v2';

export async function login(
  username: string,
  password: string,
  rememberMe: boolean
): Promise<User> {
  const data = await axios.post(
    `${BASE_URL}/auth/login`,
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
    `${BASE_URL}/auth/register`,
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
  const data = await axios.get(`${BASE_URL}/stats`);
  return data.data;
}

export async function logOut(): Promise<Stats> {
  const data = await axios.get(`${BASE_URL}/auth/logout`, {
    withCredentials: true,
  });
  return data.data;
}

export async function getAuthStatus(): Promise<User> {
  const data = await axios.get(`${BASE_URL}/auth`, {
    withCredentials: true,
  });
  return data.data.user;
}

export async function getMotd(): Promise<string> {
  const data = await axios.get(`${BASE_URL}/information/motd`, {
    withCredentials: true,
  });
  return data.data.motd;
}

export async function updateSettings(
  setting: booleanSetting,
  status: boolean
): Promise<void> {
  await axios.patch(
    `${BASE_URL}/settings/update/${setting}`,
    {status},
    {
      withCredentials: true,
    }
  );
}

export async function updateEmbed(
  header: {
    text: string;
    url: string;
  },
  author: {
    text: string;
    url: string;
  },
  title: string,
  description: string,
  color: string
): Promise<void> {
  await axios.patch(`${BASE_URL}/update/embed`, {
    withCredentials: true,
  });
}

export async function getDomains(): Promise<void> {
  const data = await axios.get(`${BASE_URL}/domains/list`, {
    withCredentials: true,
  });
  return data.data;
}

export async function updateURLLength(length: number): Promise<void> {
  await axios.patch(
    `${BASE_URL}/settings/update/urlLength`,
    {status: length},
    {
      withCredentials: true,
    }
  );
}

export async function createInvite(): Promise<string> {
  const data = await axios.post(
    `${BASE_URL}/invites/create`,
    {},
    {
      withCredentials: true,
    }
  );
  return data.data.invite;
}
