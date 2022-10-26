const fetchTodoList = {
  getTodoList: async () => {
    const response = await fetch(
      'https://social-network.samuraijs.com/api/1.1/todo-lists',
      {
        method: 'GET',
        credentials: 'include',
      },
    );
    const data = await response.json();
    return data;
  },
};

export default fetchTodoList;
