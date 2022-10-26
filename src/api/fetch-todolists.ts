const fetchTodoList = {
  getTodoList: async (baseUrl: string | undefined, endpoint: string | undefined) => {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
};

export default fetchTodoList;
