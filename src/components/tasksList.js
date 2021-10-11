import { useEffect, useState } from "react";

import Task from "./task";

// Material UI component
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

// Functional component to fetch and display all tasks
export default function TasksList(props) {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);

  // Asynchronous function to fetch db.json data
  const renderTasks = async () => {
    // server fetch uri
    let uri = "http://localhost:3000/todos";

    // Make HTTP GET request
    await fetch(uri)
      .then((res) => {
        // If Callback response is ok return json data
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);

        if(tasks !== null) {
          // Set task id for new task
          props.getId(tasks[tasks.length - 1].id + 1);
        }
      }) // Set state hook to json data
      .catch((error) => {
        console.log(error);
        setLoading(false);
      }); // Catch error only fetch failure
  };

  // Effect hook to make fetch request only once by keeping dependency array empty
  useEffect(() => {
    renderTasks();
    
    // eslint-disable-next-line
  }, [props.refresh]); 

  return (
    <Container style={{maxHeight: '100%', overflowY: 'scroll' }}  >
      {loading && <CircularProgress />}
      {/* Map through tasks to display each task */}
      {tasks &&
        tasks.map((task) => {
          // Pass task data to child component using props
          return <Task key={task.id} task={task} renderTasks={renderTasks} />;
        })}
    </Container>
  );
}
