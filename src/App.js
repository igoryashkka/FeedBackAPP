import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedBackStats from "./FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import AbouPage from "./components/pages/AbouPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedBackProvider } from "./context/FeedBackContext";

function App() {

  return (
    <FeedBackProvider>
      <Router>
        <Header text="FeedBack App" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList/>
                </>
              }
            ></Route>
            <Route path="/about" element={<AbouPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  );
}

export default App;
