import fetchTodoList from 'api/fetch-todolists';
import './App.css';

const url = process.env.REACT_APP_BASE_URL;
const endpoint = process.env.REACT_APP_TODO_LISTS;

const App: React.FC = () => {
  const data = fetchTodoList.getTodoList(url, endpoint);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data)}</header>
    </div>
  );
};

export default App;
