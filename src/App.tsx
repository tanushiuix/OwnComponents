import React from "react";
import Button from "./components/Button";

import { FaRegPaperPlane } from "react-icons/fa";

const App: React.FC = () => {
  const handleFetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Data fetched successfully!");
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw error;
    }
  };

  return (
    <div className="App">
      <h1>Reusable Button Component Example</h1>

      <h2>Async Button Example</h2>
      <Button onClick={handleFetchData}>Fetch Data</Button>

      <h3>Material UI Basic Buttons</h3>

      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text </Button>
      <Button variant="contained">Contained</Button>

      <h3>Material UI Disabled Buttons</h3>

      <Button variant="text" size="lg" color="secondary" disabled>
        Disabled
      </Button>
      <Button variant="contained" size="lg" color="secondary" disabled>
        Disabled
      </Button>
      <Button variant="outlined" size="lg" color="secondary" disabled>
        Disabled
      </Button>

      <h3>Material UI Icon Buttons</h3>

      <Button
        variant="contained"
        size="lg"
        color="primary"
        icon={<FaRegPaperPlane />}
      >
        Send
      </Button>

      <h3>Material UI Size Buttons</h3>
    </div>
  );
};

export default App;
