import { useParams } from 'react-router-dom';

const AllTasks = () => {
  const params = useParams();
  return <div>{params.taskId}</div>;
};

export default AllTasks;
