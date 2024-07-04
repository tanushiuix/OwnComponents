import React from "react";
import Button from "./components/Button";

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
      <Button color="primary">Primary Button</Button>
      <Button color="secondary" size="lg">
        Secondary Button
      </Button>
      <Button color="success" className="custom-class" size="sm">
        Success Button
      </Button>
      <Button color="danger" disabled>
        Danger Button
      </Button>
      <h2>Async Button Example</h2>
      <Button onClick={handleFetchData}>Fetch Data</Button>
      <h3>Material UI</h3>
      <Button variant="outlined">Outlined Button</Button>{" "}
    </div>
  );
};

export default App;
