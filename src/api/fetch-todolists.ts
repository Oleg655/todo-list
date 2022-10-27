const apiKey = process.env.REACT_APP_API_KEY || '';

const fetchTodoList = {
  getTodoList: async (baseUrl: string | undefined) => {
    const response = await fetch(`${baseUrl}/todo-lists`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  },
  postTodoList: async (baseUrl: string | undefined) => {
    const response = await fetch(`${baseUrl}/todo-lists`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ title: 'newTitle' }),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};

export default fetchTodoList;
