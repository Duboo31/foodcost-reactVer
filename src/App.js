import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css"
import FoodCost from "./routes/FoodCost";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import Navigation from "./routes/Navigation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="/foodCost" element={<FoodCost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;