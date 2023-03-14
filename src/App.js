import React, { useEffect, useRef } from "react";
import "./App.scss";
import Header from "./components/header";
import Home from "./views/home";
import Footer from "./components/footer";
import { setLoading } from "./storage/redux/items/actions";
import { initializeApp } from "./utils/helpers";
import ErrorBoundary from "./components/error-boundary";

function App() {
  const appRef = useRef(false);
  useEffect(() => {
    if (appRef.current) return;
    appRef.current = true;
    setLoading(true);
    initializeApp().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <div>
          <Home />
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
