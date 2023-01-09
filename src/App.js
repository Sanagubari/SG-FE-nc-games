import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ReviewList } from "./components/ReviewList";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
