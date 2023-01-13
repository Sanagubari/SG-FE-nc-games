import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import { LoginPage } from "./components/LoginPage";
import { useState } from "react";
import { UserContext } from "./contexts/User";
import { useContext } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const loggedInUser = useContext(UserContext)
  console.log(loggedInUser, '<<<<<<,mystery')
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/games/:review_id" element={<SingleReview />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
