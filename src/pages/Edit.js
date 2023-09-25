import { useContext, useEffect, useState } from "react";
import DiaryEditor from "../diary/DiaryEditor";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryContext } from "../context/diary-context";

const Edit = () => {
  const { diary } = useContext(DiaryContext);
  const navigate = useNavigate();
  const [originData, setOriginData] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (diary.length) {
      const targetDiary = diary.filter(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary.length) {
        setOriginData(targetDiary[0]);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diary]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};
export default Edit;
