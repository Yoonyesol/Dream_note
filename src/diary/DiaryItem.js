import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import "./DiaryItem.css";
import Card from "../components/Card";

const DiaryItem = ({ id, title, content, date }) => {
  const navigate = useNavigate();

  //toLocaleDateString(): 로컬 규칙을 사용하여 Date 객체의 날짜 부분을 문자열로 반환
  const strDate = new Date(parseInt(date)).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
  });

  const goDetailHandler = () => {
    navigate(`/diary/${id}`);
  };

  const goEditHandler = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="diary-item-wrapper">
      <Card>
        <div className="diary-item">
          <div className="diary-image" onClick={goDetailHandler}>
            <img src={process.env.PUBLIC_URL + `assets/dog.jpeg`} />
          </div>
          <div className="diary-info" onClick={goDetailHandler}>
            <div className="diary-date">{strDate}</div>
            <div className="content-preview">
              <div className="diary-title">title: {title}</div>
              <div className="diary-content">{content.slice(0, 20)}</div>
            </div>
          </div>
          <div className="button-wrapper">
            <Button type="negative" text="수정하기" onClick={goEditHandler} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DiaryItem;
