import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import store from "./Store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
