import { useEffect } from "react";
import DiaryEditor from "../diary/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Dream Note : 새 일기 작성`;
  }, []);
  return <DiaryEditor />;
};
export default New;
