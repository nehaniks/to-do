import './App.css';

import TasksList from './components/tasksList';

import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Typography
          sx={{
            mt: 4,
            p: 2,
          }}
          color= "primary"
          variant="h3"
          component="div"
        >
          To-Do App
        </Typography>

        {/* Tasks List Component to retrieve and display all tasks list from data/db.json */}
        <TasksList />
    </div>
  );
}

export default App;
