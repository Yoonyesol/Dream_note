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
        headText="검색 결과"
      />
      <div className="searchResult">
        <strong>
          {location.state.inputText.length <= 20
            ? `'${location.state.inputText}'`
            : `'${location.state.inputText.slice(0, 20)}...'`}
        </strong>
        {` 검색 결과입니다.`}
        {location.state.SearchedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
