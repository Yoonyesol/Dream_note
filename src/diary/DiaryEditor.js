import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";

import "./DiaryEditor.css";
import { DiaryContext } from "../context/diary-context";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryContext);

  const [date, setDate] = useState(getStringDate(new Date()));
  const [img, setImg] = useState();
  const [genre, setGenre] = useState("일상");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const imgRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();

  const genreList = [
    { value: "daily", name: "일상" },
    { value: "fantasy", name: "판타지" },
    { value: "action", name: "액션" },
    { value: "adventure", name: "모험" },
    { value: "horror", name: "호러" },
  ];

  const setImgHandler = (e) => {
    const imgfile = imgRef.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(imgfile);
    setImg(imgfile);
  };

  const submitHandler = () => {
    if (!content) {
    }
    onCreate(date, img, genre, title, content);
    navigate("/", { replace: true });
  };

  return (
    <div className="diary-editor">
      <Header
        leftBtn={
          <Button
            type="negative"
            text="뒤로 가기"
            onClick={(e) => navigate(-1)}
          />
        }
        headText="새 일기 쓰기"
      />
      <div>
        <section>
          <h4>오늘의 날짜</h4>
          <input
            className="input-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </section>
        <section>
          <h4>이미지</h4>
          <input type="file" onChange={setImgHandler} ref={imgRef} />
          {img && (
            <div className="img-preview">
              <img alt="이미지" src={img}></img>
            </div>
          )}
        </section>
        <section>
          <h4>장르 | 제목</h4>
          <div className="genre-title-wrapper">
            <div className="genre-wrapper">
              <select onChange={(e) => setGenre(e.target.value)}>
                {genreList.map((it, idx) => (
                  <option key={idx} value={it.value}>
                    {it.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="title-wrapper">
              <input
                placeholder="제목"
                ref={titleRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h4>내용</h4>
            <div className="text-wrapper">
              <textarea
                placeholder="내용"
                ref={contentRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="control-btn">
            <Button
              type="negative"
              text="취소하기"
              onClick={(e) => navigate(-1)}
            />
            <Button type="positive" text="작성하기" onClick={submitHandler} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
