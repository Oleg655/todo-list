const baseUrl = process.env.REACT_APP_BASE_URL || '';
const apiKey = process.env.REACT_APP_API_KEY || '';

const authorization = {
  login: async (
    email: string,
    password: string,
    rememberMe: boolean,
  ): Promise<Response<AuthLoginResponse>> => {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password, rememberMe }),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  logOut: async (): Promise<Response<AuthLoginResponse>> => {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  me: async (): Promise<Response<AuthMeResponse>> => {
    const response = await fetch(`${baseUrl}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  },
};

export type AuthLoginResponse = {
  userId?: number;
};

export type AuthMeResponse = {
  id: number;
  email: string;
  login: string;
};

export type Response<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export default authorization;
