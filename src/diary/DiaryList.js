import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const sortOption = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

//최신순, 오래된 순 출력해주고 각 값을 선택하면 그에 맞춰 setSortType을 바꿔주는 컴포넌트
const ControlMenu = ({ value, choosOption, optionList }) => {
  return (
    <select value={value} onChange={(e) => choosOption(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");

  //정렬한 값을 리턴해주는 함수
  const getSortedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        //내림차순
        return parseInt(b.date) - parseInt(a.date);
      } else {
        //오름차순
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);

    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        choosOption={setSortType}
        optionList={sortOption}
      />
      <Button
        type="positive"
        text="새 일기 작성"
        onClick={() => navigate("/new")}
      />
      {getSortedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

export default DiaryList;
