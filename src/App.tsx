import "./App.css";
import { Home, Rules, Result } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/components";
import { useTheme } from "./context/context";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:categoryId" element={<Rules />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
