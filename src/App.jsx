import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
