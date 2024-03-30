import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "London", "Denver", "Sydney"];
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log("Selected item: ", item);
  };

  const handleButtonClick = () => {
    setAlertVisible(true);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="primary" onClick={handleButtonClick}>
        Click me
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <span>Test Alert Info!</span>
        </Alert>
      )}
    </div>
  );
}

export default App;
