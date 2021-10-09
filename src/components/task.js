// Material UI Components
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

// Material Icons
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

// Material UI Transition
import Collapse from "@mui/material/Collapse";

// Functional component to display each task
export default function Task(props) {
  return (
    <div>
      <ListItem
        secondaryAction={
          // Delete Button Icon
          <IconButton edge="end" aria-label="delete">
            <Collapse in={true} orientation="horizontal">
              <CloseIcon
                sx={{
                  backgroundColor: "red",
                  color: "white",
                }}
              />
            </Collapse>
          </IconButton>
        }
      >
        <ListItemAvatar >
            <DoneIcon />
        </ListItemAvatar>

        {/* Task Title and Description (only first 100 characters) */}
        <ListItemText
          // Strikethrough text if task is completed
          style={{ textDecoration : props.task.completed ? 'line-through' : 'none' }}
          primary="Single-line item"
          secondary={props.task.description.slice(0, 100) + "..."}
        />
      </ListItem>
    </div>
  );
}
