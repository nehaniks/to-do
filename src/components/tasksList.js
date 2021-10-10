import { useEffect, useState } from "react";

import Task from "./task";

// Functional component to fetch and display all tasks
export default function TasksList() {
  const [tasks, setTasks] = useState([]);

  // Asynchronous function to fetch db.json data
  const renderTasks = async () => {
    // server fetch uri
    let uri = "http://localhost:3004/todos";

    // Make HTTP GET request
    await fetch(uri)
      .then((res) => {
        // If Callback response is ok return json data
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setTasks(data)) // Set state hook to json data
      .catch((error) => console.log(error)); // Catch error only fetch failure
  };

  // Effect hook to make fetch request only once by keeping dependency array empty
  useEffect(() => {
    renderTasks();
  }, []);

  return (
    <div>
      {/* Map through tasks to display each task */}
      {tasks && tasks.map((task) => {
        // Pass task data to child component using props
        return <Task key={task.id} task={task} renderTasks={renderTasks} />;
      })}
    </div>
  );
}
