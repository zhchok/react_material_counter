import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { theme } from "./theme/create-theme";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <Container className="App">
      <Typography variant="h4">{count}</Typography>
      <Button size="small" variant="outlined" onClick={handleIncrease}>
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        sx={{
          ml: `${theme.spacing(1)}`,
        }}
        onClick={handleDecrease}
      >
        -
      </Button>
    </Container>
  );
}

export default App;
