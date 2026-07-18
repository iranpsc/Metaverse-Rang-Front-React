import { useEffect, useState } from "react";
import Organizers from "./organizers/Organizers";
import Questions from "./questions/Questions";
import useRequest from "../../../services/Hooks/useRequest";
import { getTranslation } from "../../../services/Utility";
import falsep from "../../../assets/images/challenge/close-circle.svg";
import truep from "../../../assets/images/challenge/tick-circle.svg";
import users from "../../../assets/images/challenge/profile-2user.svg";
import view from "../../../assets/images/challenge/eye.svg";

const ChallengeView = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const [organizers, setOrganizers] = useState(null);
  const [footers, setFooters] = useState([]);
  const [firstPage, setFirstPage] = useState(true);
  const [shining, setShining] = useState("four");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [organizersRes, timingsRes] = await Promise.all([
          Request("challenge/advertisement", HTTP_METHOD.GET),
          Request("challenge/timings", HTTP_METHOD.GET),
        ]);
        console.log("organizersRes", organizersRes.data.data)
        setOrganizers(organizersRes.data.data);

        const timings = timingsRes.data.data;
        setFooters([
          {
            id: 1,
            icon: truep,
            count: timings?.display_answer_interval ?? 0,
            slug: "پاسخ های صحیح",
          },
          {
            id: 2,
            icon: falsep,
            count: timings?.display_question_interval ?? 0,
            slug: "پاسخ های غلط",
          },
          {
            id: 3,
            icon: view,
            count: timings?.display_ad_interval ?? 0,
            slug: "تعداد بازدید",
          },
          {
            id: 4,
            icon: users,
            count: timings?.participants ?? 0,
            slug: "مشارکت کنندگان",
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  if (!organizers) return null;
  return firstPage ? (
    <Organizers
      footers={footers}
      organizers={organizers}
      setFirstPage={setFirstPage}
      firstPage={firstPage}
      shining={shining}
    />
  ) : (
    <Questions
      organizers={organizers}
      setFooters={setFooters}
      footers={footers}
      setFirstPage={setFirstPage}
      setShining={setShining}
    />
  );
};

export default ChallengeView;
