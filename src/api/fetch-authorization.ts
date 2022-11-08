const baseUrl = process.env.REACT_APP_BASE_URL || '';

const authorization = {
  login: async (
    email: string,
    password: string,
    rememberMe: boolean,
  ): Promise<Response<RequestPayload>> => {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ email, password, rememberMe }),
    });
    const data = await response.json();
    return data;
  },
};

export type RequestPayload = {
  userId?: number;
};

export type Response<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export default authorization;
