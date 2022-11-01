import "./App.css";
import Test from "./Test";
import { useState } from "react";

function App() {
  const [currentCategory, setCurrentCategory] = useState("dexterity");
  const [currentReviews, setCurrentReviews] = useState([]);

  return (
    <div className="App">
      <Test
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentReviews={currentReviews}
        setCurrentReviews={setCurrentReviews}
      />
    </div>
  );
}

export default App;
