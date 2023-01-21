import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User";
import { ReviewsProvider } from "./contexts/Reviews";
import { CategoriesProvider } from "./contexts/Categories";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CategoriesProvider>
      <ReviewsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ReviewsProvider>
    </CategoriesProvider>
  </BrowserRouter>
);
