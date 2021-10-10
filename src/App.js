import "./App.css";

import TasksList from "./components/tasksList";

// Material UI Components
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

// Material Icons
import AddIcon from "@mui/icons-material/Add";

// Custom styles
import { theme, containerStyle, fabStyle } from "./styles/customStyles";

function App() {
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

        <Fab sx={fabStyle} aria-label="add">
          <AddIcon />
        </Fab>

        {/* Tasks List Component to retrieve and display all tasks list from data/db.json */}
        <TasksList />
      </Container>
    </div>
  );
}

export default App;
