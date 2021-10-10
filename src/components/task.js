import { useState } from "react";

// Material UI Components
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

// Material Icons
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";

// Material UI Transition
import Collapse from "@mui/material/Collapse";

// Functional component to display each task
export default function Task(props) {
  const [complete, setComplete] = useState(props.task.completed);
  const [view, setView] = useState(false);

  // server fetch uri
  let uri = "http://localhost:3004/todos";

  const handleCompleted = async () => {
    // Toggle task as completed
    setComplete(!complete);

    // Update Task to mark as completed
    await fetch(`${uri}/${props.task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...props.task, completed: !props.task.completed }), // Toggle task completed or not
    }).catch((error) => console.log(error)); // Catch error only fetch failure
    props.renderTasks();
  };

  const handleDelete = async () => {
    // Delete Task
    await fetch(`${uri}/${props.task.id}`, {
      method: "DELETE",
    }).catch((error) => console.log(error)); // Catch error only fetch failure
    props.renderTasks();
  };

  return (
    <div>
      <ListItem
        // Show task details on hover
        onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false)}
        secondaryAction={
          // Delete Button Icon
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <Collapse in={view} orientation="horizontal">
              <CloseIcon
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 1,
                }}
              />
            </Collapse>
          </IconButton>
        }
      >
        <ListItemAvatar onClick={handleCompleted}>
          {complete ? <DoneAllIcon /> : <DoneIcon />}
        </ListItemAvatar>

        {/* Task Title and Description (only first 100 characters) */}
        <ListItemText
          // Toggle task as completed
          onClick={handleCompleted}
          // Strikethrough text if task is completed
          style={{
            textDecoration: props.task.completed ? "line-through" : "none",
          }}
          primary="Single-line item"
          secondary={view ? props.task.description.slice(0, 100) + "..." : null}
        />
      </ListItem>
    </div>
  );
}
