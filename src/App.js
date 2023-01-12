import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ReviewPage } from "./components/ReviewPage";
import { SingleReview } from "./components/SingleReview";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/games/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
