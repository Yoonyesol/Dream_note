import { useContext, useState } from "react";
import { DiaryContext } from "../context/diary-context";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
  const diaryCtx = useContext(DiaryContext);
  const [inputText, setInputText] = useState("");

  const navigate = useNavigate();

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const SearchedData = diaryCtx.diary.filter((it) => {
    if (inputText !== "") {
      return it.content.toLowerCase().includes(inputText);
    }
  });

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={inputHandler}
        />
      </div>
      <div className="search-btn">
        <Button
          type="dark-brown"
          text="검색"
          onClick={() =>
            navigate("/search", {
              state: { inputText, SearchedData },
            })
          }
        />
      </div>
    </div>
  );
};

export default SearchBar;
