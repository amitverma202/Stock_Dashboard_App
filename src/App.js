import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import StockContext from "./context/StockContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Router>
         <Routes>
            <Route
              path="/"
              element={<Auth onLogin={handleLogin} />}
            />
            {isLoggedIn && (
              <Route
                path="/dashboard"
                element={<Dashboard onLogout={handleLogout} />}
              />
            )}
          </Routes>
        </Router>
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
