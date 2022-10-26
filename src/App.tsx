import fetchTodoList from 'api/fetch-todolists';
import './App.css';

const App: React.FC = () => {
  const data = fetchTodoList.getTodoList();
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data)}</header>
    </div>
  );
};

export default App;
