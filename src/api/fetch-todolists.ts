const apiKey = process.env.REACT_APP_API_KEY || '';

const fetchTodoList = {
  getTodoLists: async (baseUrl: string | undefined): Promise<TodoListType[]> => {
    try {
      const response = await fetch(`${baseUrl}/tod-lists`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const todoLists = await response.json();
      return todoLists;
    } catch (error: any) {
      return error.message;
    }
  },
  createTodoList: async (
    baseUrl: string | undefined,
    newTitle: { title: string },
  ): Promise<ResponseType<{ item: TodoListType }>> => {
    const response = await fetch(`${baseUrl}/todo-lists/`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newTitle),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  deleteTodoList: async (
    baseUrl: string | undefined,
    todoListId: string,
  ): Promise<ResponseType<{}>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': apiKey,
      },
    });
    const data = await response.json();
    return data;
  },
  updateTodoList: async (
    baseUrl: string | undefined,
    todoListId: string,
    newTitle: { title: string },
  ): Promise<ResponseType<{}>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(newTitle),
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

type ResponseType<D> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export type TodoListType = {
  id: string;
  addedDate: string;
  order: number;
  title: string;
};
