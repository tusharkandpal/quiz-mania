import "./App.css";
import { Home } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
