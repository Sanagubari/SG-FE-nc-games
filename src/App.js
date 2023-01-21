import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ReviewPage } from "./components/ReviewPage";
import { SingleReview } from "./components/SingleReview";
import { ErrorPage } from "./components/ErrorPage";
import { WriteReview } from "./components/WriteReview";
import { LoginPage } from "./components/LoginPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/games/:review_id" element={<SingleReview />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/writeReview" element={<WriteReview />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
