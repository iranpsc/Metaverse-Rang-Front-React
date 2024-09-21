import HistoryItem from "./HistoryItem";
import styled from "styled-components";

const history = [
  {
    id: 1,
    date: { day: 1, month: "خرداد" },
    user: "HM-2000081",
    link: "https://rgb.irpsc.com/fa/citizen/hm-2000001",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
  },
  {
    id: 2,
    date: { day: 30, month: "اردیبهشت" },
    user: "HM-2000081",
    link: "https://rgb.irpsc.com/fa/citizen/hm-2000001",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
  },
  {
    id: 3,
    date: { day: 25, month: "اردیبهشت" },
    user: "HM-2000081",
    link: "https://rgb.irpsc.com/fa/citizen/hm-2000001",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
  },
  {
    id: 4,
    date: { day: 24, month: "اردیبهشت" },
    user: "HM-2000081",
    link: "https://rgb.irpsc.com/fa/citizen/hm-2000001",
    time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰",
  },
];
const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 15px;
  overflow-y: auto;

  height: 68%;
  @media (min-width: 930px) {
    height: 71%;
  }
  @media (min-width: 1024px) {
    height: 70%;
  }
  @media (min-width: 1180px) {
    height: 80%;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 2fr 3fr;
  }
`;

const HistoryTab = () => {
  return (
    <Container>
      {history.map((item) => (
        <HistoryItem key={item.id} {...item} />
      ))}
      <HistoryItem
        date={{ day: "20", month: "اردیبهشت" }}
        user="سیستم آر جی بی"
        time="۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰"
        owner
      />
    </Container>
  );
};

export default HistoryTab;
