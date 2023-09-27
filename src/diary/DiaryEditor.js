import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Header from "../components/Header";

import "./DiaryEditor.css";
import { DiaryContext } from "../context/diary-context";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const genreList = ["일상", "판타지", "액션", "모험", "호러"];

const DiaryEditor = ({ isEdit, originData }) => {
  const { onCreate, onEdit, onRemove } = useContext(DiaryContext);

  const [date, setDate] = useState(getStringDate(new Date()));
  const [img, setImg] = useState();
  const [genre, setGenre] = useState("일상");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genreEditorShown, setGenreEditorShown] = useState(false);
  const [inputData, setInputData] = useState("");
  const [userGenre, setUserGenre] = useState([]);

  const imgRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const userGenreRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("dreamNoteGenre");
    if (!localData) {
      setUserGenre(genreList);
      localStorage.setItem("dreamNoteGenre", JSON.stringify(genreList));
    } else {
      setUserGenre(JSON.parse(localData));
    }
  }, []);

  const setImgHandler = () => {
    const imgfile = imgRef.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(imgfile);
    setImg(imgfile);
  };

  const submitHandler = () => {
    if (!title) {
      titleRef.current.focus();
      return;
    }
    if (!content) {
      contentRef.current.focus();
      return;
    }
    if (!isEdit) {
      onCreate(date, img, genre, title, content);
    } else {
      onEdit(originData.id, date, img, genre, title, content);
    }
    navigate("/", { replace: true });
  };

  const genreEditroHandler = () => {
    setGenreEditorShown((prev) => !prev);
  };

  const addGenreHandler = () => {
    if (inputData !== "") {
      const genreArr = [...userGenre];
      if (!genreArr.some((it) => it === inputData)) {
        genreArr.push(inputData);
        setUserGenre(genreArr);
        setInputData("");
        userGenreRef.current.value = null;
        localStorage.setItem("dreamNoteGenre", JSON.stringify(genreArr));
      }
    }
  };

  const removeGenreHandler = (value) => {
    if (value !== "일상" && value !== genre) {
      const genreArr = userGenre.filter((it) => it !== value);
      setUserGenre(genreArr);
      localStorage.setItem("dreamNoteGenre", JSON.stringify(genreArr));
    }
  };

  const removeHandler = () => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setImg(originData.img);
      setGenre(originData.genre);
      setTitle(originData.title);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="diary-editor">
      <Header
        leftBtn={
          <Button
            type="light-brown"
            text="뒤로 가기"
            onClick={() => navigate(-1)}
          />
        }
        headText={isEdit ? "수정하기" : "새 일기 쓰기"}
        rightBtn={
          isEdit && (
            <Button type="red" text="삭제하기" onClick={removeHandler} />
          )
        }
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
          <div className="h4-genre-wrapper">
            <h4>장르 | 제목</h4>
            <div className="genre-add-btn">
              <Button
                type="little"
                text="장르 추가"
                onClick={genreEditroHandler}
              />
            </div>
          </div>
          {genreEditorShown && (
            <div className="genre-edit-div">
              <div className={"genre-editor"}>
                <input
                  placeholder="장르"
                  ref={userGenreRef}
                  onChange={(e) => setInputData(e.target.value)}
                />
                <Button
                  type="little purple"
                  text="+"
                  onClick={addGenreHandler}
                />
                {userGenre.map((it, idx) => (
                  <li key={idx} value={it}>
                    {it}
                    <Button
                      type="little red"
                      text="x"
                      onClick={() => removeGenreHandler(it)}
                    />
                  </li>
                ))}
              </div>
            </div>
          )}
          <div className="genre-title-wrapper">
            <div className="genre-wrapper">
              <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                {userGenre.map((it, idx) => (
                  <option key={idx} value={it}>
                    {it}
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
        </section>
        <section>
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
              type="light-brown"
              text="취소하기"
              onClick={(e) => navigate(-1)}
            />
            <Button
              type="dark-brown"
              text={isEdit ? "수정완료" : "작성하기"}
              onClick={submitHandler}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
