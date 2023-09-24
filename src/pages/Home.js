import { useContext, useEffect, useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import { DiaryContext } from "../context/diary-context";

const Home = () => {
  const diaryCtx = useContext(DiaryContext);
  const [curDate, setCurDate] = useState(new Date());
  const [data, setData] = useState([]);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryCtx.diary) {
      //현재 년월의 첫번째 날
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      //다음 달 0일까지
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      //이번 달 일기를 추리기
      setData(
        diaryCtx.diary.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryCtx.diary, curDate]); //일기가 변화하거나 현재 시간이 변화할때 리렌더링됨

  const decreaseMonthHandler = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  const increaseMonthHandler = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  return (
    <div>
      <Header
        headText={headText}
        leftBtn={<Button text="◀" onClick={decreaseMonthHandler} />}
        rightBtn={<Button text="▶" onClick={increaseMonthHandler} />}
      />
      {data.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};
export default Home;
