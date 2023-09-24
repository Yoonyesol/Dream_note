import React, { createContext, useReducer, useRef } from "react";

const dummyData = [
  {
    id: 1,
    content: "오늘의 일기 1번",
    date: 1692448583692,
  },
  {
    id: 2,
    content: "오늘의 일기 2번",
    date: 1692448583693,
  },
  {
    id: 3,
    content: "오늘의 일기 3번",
    date: 1692448583694,
  },
  {
    id: 4,
    content: "오늘의 일기 4번",
    date: 1692448583695,
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
        it.id === action.diary.id ? { ...action.data } : it
      );
      break;
    }
    case "REMOVE": {
      diaryArr = state.filter((it) => it.id !== action.targetId);
      return action.diary;
    }
    default:
      return state;
  }
  return diaryArr;
};

//컨텍스트 생성
export const DiaryContext = createContext({
  diary: [],
  onCreate: () => {},
  onEdit: () => {},
  onRemove: () => {},
});

const DiaryProvider = ({ children }) => {
  const [diary, dispatch] = useReducer(reducer, dummyData);

  const diaryId = useRef(0);

  //CREATE
  const onCreate = (date, content) => {
    dispatch({
      type: "CREATE",
      diary: {
        id: diaryId.current,
        date: new Date(date).getTime(),
        content,
      },
    });
    diaryId.current += 1;
  };

  //EDIT
  const onEdit = (targetId, date, content) => {
    dispatch({
      type: "EDIT",
      diary: {
        id: targetId.current,
        date: new Date(date).getTime(),
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
