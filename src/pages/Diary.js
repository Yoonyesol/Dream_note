import { useContext, useEffect, useState } from "react";
import { DiaryContext } from "../context/diary-context";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";

import "./Diary.css";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Diary = () => {
  const { diary } = useContext(DiaryContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Dream Note : ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diary.length) {
      const targetDiary = diary.filter(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary.length) {
        setData(targetDiary[0]);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diary]);

  if (!data) {
    return <div className="diary-detail">로딩중입니다...</div>;
  }

  return (
    <div className="diary-detail">
      <Header
        leftBtn={
          <Button
            type="light-brown"
            text={"뒤로 가기"}
            onClick={() => navigate(-1)}
          />
        }
        headText={`${getStringDate(new Date(data.date))} 일기`}
        rightBtn={
          <Button
            type="dark-brown"
            text={"수정하기"}
            onClick={() => navigate(`/edit/${data.id}`)}
          />
        }
      />
      <div>
        {data.img && (
          <section>
            <div className="diary-detail-img">
              <img alt="이미지" src={data.img}></img>
            </div>
          </section>
        )}
        <section>
          <h4>장르 | 제목</h4>
          <div className="diary-detail-genre-title-wrapper">
            <div className="diary-detail-genre">{data.genre}</div>
            <div className="diary-detail-title">{data.title}</div>
          </div>
        </section>
        <section>
          <div>
            <h4>내용</h4>
            <div className="diary-detail-text">{data.content}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Diary;
