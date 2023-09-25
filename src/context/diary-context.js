import React, { createContext, useEffect, useReducer, useRef } from "react";

//reducer - state를 업데이트 하는 역할
export const reducer = (state, action) => {
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
  //로컬스토리지에 데이터를 JSON 형태로 저장
  localStorage.setItem("dreamNote", JSON.stringify(diaryArr));
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
  const [diary, dispatch] = useReducer(reducer, []);

  const diaryId = useRef(1);

  //로컬스토리지에서 데이터 가져오기
  useEffect(() => {
    const localData = localStorage.getItem("dreamNote");
    if (localData.length > 2) {
      //기본값인 최신순으로 정렬
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      //가장 최근 일기의 id에서 +1
      diaryId.current = parseInt(diaryList[0].id) + 1;

      dispatch({ type: "INIT", diary: diaryList });
    }
  }, []);

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
