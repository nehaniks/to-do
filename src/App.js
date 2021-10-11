import "./App.css";
import { useState } from "react";

import TasksList from "./components/tasksList";

// Material UI Components
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// Material Icons
import AddIcon from "@mui/icons-material/Add";

// Custom styles
import { theme, containerStyle, fabStyle } from "./styles/customStyles";

function App() {
  const [open, setOpen] = useState(false);
  const [refresh, doRefresh] = useState(0);
  const [taskId, setTaskId] = useState(0);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // Open new task form
  const handleOpen = () => {
    setOpen(true);
  };

  // Set task title to value of title text field
  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  // Set task description to value of title text field
  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  // Close add new task form
  const handleClose = () => {
    setOpen(false);
  };

  // Cleanup data fields and refresh
  const cleanup = () => {
    setTaskTitle("");
    setTaskDesc("");

    // Refresh tasks list
    doRefresh(refresh+1);
  };

  // Add new task to db
  const handleAdd = async () => {
    console.log(taskId)
    
    // Close add new task form
    setOpen(false);

    // server fetch uri
    let uri = "http://localhost:3004/todos";

    await fetch(`${uri}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "id": taskId,
        "title": taskTitle,
        "description": taskDesc,
        "completed": false, 
      }), // Toggle task completed or not
    }).catch((error) => console.log(error)); // Catch error only fetch failure

    cleanup();
  };

  return (
    <div className="App">
      <Container maxWidth="sm" sx={containerStyle}>
        <Typography
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          variant="h3"
          component="div"
        >
          To-Do App
        </Typography>

        {/* Add new task button */}
        <Fab sx={fabStyle} aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>

        {/* Add new task popup form */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={taskTitle}
              onChange={handleTitleChange}
            />

            <TextField
              margin="dense"
              id="desc"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              value={taskDesc}
              onChange={handleDescChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              sx={{ color: theme.palette.secondary.main }}
              onClick={handleAdd}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>

        {/* Tasks List Component to retrieve and display all tasks list from data/db.json */}
        <TasksList refresh={refresh} getId={setTaskId} />
      </Container>
    </div>
  );
}

export default App;
