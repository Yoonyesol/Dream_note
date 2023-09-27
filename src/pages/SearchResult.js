import { useLocation, useNavigate } from "react-router-dom";
import DiaryItem from "../diary/DiaryItem";
import Header from "../components/Header";
import Button from "../components/Button";

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Header
        leftBtn={
          <Button
            type="light-brown"
            text="뒤로 가기"
            onClick={() => navigate(-1)}
          />
        }
        headText={`'${location.state.inputText}' 검색 결과입니다`}
      />
      <div className="searchResult">
        {location.state.SearchedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
