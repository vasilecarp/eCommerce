import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />          
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />               
        
        {/* Home */}
        </Routes> 
      </div>
   </Router>
  );
}

export default App;
