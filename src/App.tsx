import fetchTodoList from 'api/fetch-todolists';
import './App.css';

const url = process.env.REACT_APP_BASE_URL;

const App: React.FC = () => {
  const data = fetchTodoList.getTodoList(url);
  const postData = fetchTodoList.postTodoList(url);
  console.log(data);
  console.log(postData);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data)}</header>
    </div>
  );
};

export default App;
