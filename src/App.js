import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import{LoginPage} from './components/LoginPage'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [user, setUser] = useState(null)
  console.log(user, '<<<<<<user')

  return (
    <div className="App">
      <Header  />
      <Routes>
        <Route
          path="/"
          element={
            <ReviewList
            />
          }
        />
        <Route path="/games/:review_id" element={<SingleReview user={user}/>} />
        <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
