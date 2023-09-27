import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import DiaryProvider from "./context/diary-context";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className="App">
      <DiaryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/new" element={<New />} exact />
            <Route path="/edit/:id" element={<Edit />} exact />
            <Route path="/diary/:id" element={<Diary />} exact />
            <Route path="/search" element={<SearchResult />} exact />
          </Routes>
        </BrowserRouter>
      </DiaryProvider>
    </div>
  );
}

export default App;
