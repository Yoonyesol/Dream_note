import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/new" element={<New />} exact />
          <Route path="/edit/:id" element={<Edit />} exact />
          <Route path="/diary/:id" element={<Diary />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
