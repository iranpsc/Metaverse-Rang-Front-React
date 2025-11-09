import HistoryItem from "./HistoryItem";
import styled from "styled-components";
import BaseContainer from "../../../../components/Common/Container";

const StyledContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px; // اینجا فاصله بین آیتم‌ها
`;

const history = [
  { id: 1, date: { day: 1, month: "خرداد" }, user: "HM-2000081", link: "https://rgb.irpsc.com/fa/citizens/hm-2000001", time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰" },
  { id: 2, date: { day: 30, month: "اردیبهشت" }, user: "HM-2000081", link: "https://rgb.irpsc.com/fa/citizens/hm-2000001", time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰" },
  { id: 3, date: { day: 25, month: "اردیبهشت" }, user: "HM-2000081", link: "https://rgb.irpsc.com/fa/citizens/hm-2000001", time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰" },
  { id: 4, date: { day: 24, month: "اردیبهشت" }, user: "HM-2000081", link: "https://rgb.irpsc.com/fa/citizens/hm-2000001", time: "۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰" },
];

const HistoryTab = () => {
  return (
    <StyledContainer>
      {history.map((item) => (
        <HistoryItem key={item.id} {...item} />
      ))}
      <HistoryItem
        date={{ day: "20", month: "اردیبهشت" }}
        user="سیستم آر جی بی"
        time="۲۰ اردیبهشت ۱۴۰۰۲ | ۱۲:۳۰"
        owner
      />
    </StyledContainer>
  );
};

export default HistoryTab;
