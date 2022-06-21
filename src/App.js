import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import ProductSelection from "./pages/ProductSelection";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Product />} path="/demo" />
          <Route element={<ProductSelection />} path="/productselection" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
