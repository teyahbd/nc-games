import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ReviewsView from "./components/ReviewsView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReviewsView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
