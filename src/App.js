import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header
        headText="App"
        leftBtn={<Button text="◀" onClick={() => alert("왼쪽클릭")} />}
        rightBtn={<Button text="▶" onClick={() => alert("오른쪽클릭")} />}
      />
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
