import './App.css';

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
    </div>
  );
}

export default App;
