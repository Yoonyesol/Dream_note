import React, { createContext, useReducer, useRef } from "react";

const dummyData = [
  {
    id: 1,
    title: "1번 일기",
    img: "",
    content: "오늘의 일기 1번",
    date: 1695630298754,
  },
  {
    id: 2,
    title: "2번 일기",
    img: "",
    content: "오늘의 일기 2번",
    date: 1695630298755,
  },
  {
    id: 3,
    title: "3번 일기",
    img: "",
    content: "오늘의 일기 3번",
    date: 1695630298758,
  },
  {
    id: 4,
    title: "4번 일기",
    img: "",
    content: "오늘의 일기 4번",
    date: 1699939298759,
  },
];

//reducer - state를 업데이트 하는 역할
const reducer = (state, action) => {
  let diaryArr = [];
  switch (action.type) {
    case "INIT": {
      return action.diary;
    }
    case "CREATE": {
      diaryArr = [action.diary, ...state];
      break;
    }
    case "EDIT": {
      diaryArr = state.map((it) =>
        it.id === action.diary.id ? { ...action.diary } : it
      );
      break;
    }
    case "REMOVE": {
      diaryArr = state.filter((it) => it.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  return diaryArr;
};

//컨텍스트 생성
export const DiaryContext = createContext({
  diary: null,
  onCreate: () => {},
  onEdit: () => {},
  onRemove: () => {},
});

const DiaryProvider = ({ children }) => {
  const [diary, dispatch] = useReducer(reducer, dummyData);

  const diaryId = useRef(5);

  //CREATE
  const onCreate = (date, img, genre, title, content) => {
    dispatch({
      type: "CREATE",
      diary: {
        id: diaryId.current,
        date: new Date(date).getTime(),
        img,
        genre,
        title,
        content,
      },
    });
    diaryId.current += 1;
  };

  //EDIT
  const onEdit = (targetId, date, img, genre, title, content) => {
    dispatch({
      type: "EDIT",
      diary: {
        id: targetId,
        date: new Date(date).getTime(),
        img,
        genre,
        title,
        content,
      },
    });
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  return (
    <DiaryContext.Provider value={{ diary, onCreate, onEdit, onRemove }}>
      {children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
