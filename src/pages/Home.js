import { useContext, useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import { DiaryContext } from "../context/diary-context";

const Home = () => {
  const diaryCtx = useContext(DiaryContext);
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

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
    <>
      <Header
        headText={headText}
        leftBtn={<Button text="◀" onClick={decreaseMonthHandler} />}
        rightBtn={<Button text="▶" onClick={increaseMonthHandler} />}
      />
      <h1>Home</h1>
      {diaryCtx.diary.map((it) => (
        <div>{it.content}</div>
      ))}
    </>
  );
};
export default Home;
