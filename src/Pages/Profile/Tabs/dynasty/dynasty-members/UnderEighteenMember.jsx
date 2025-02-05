import MemberCard from "./MemberCard";
import styled from "styled-components";
import { toast } from "react-toastify";
import Title from "../../../../../Components/Title";
import Button from "../../../../../Components/Button";

import SearchInput from "../../../../../Components/SearchInput";
import OnOff from "../../../../Settings/Tabs/OnOff";
const settings = [
  { id: 1, label: "قابلیت خرید از فروشگاه متارنگ" },
  { id: 2, label: "قابلیت شرکت در پروژه های اتحادی" },
  { id: 3, label: "قابلیت فروش املاک و متغلات در متارنگ" },
  { id: 4, label: "قابلیت شرکت در چالش ها" },
  { id: 5, label: "قابلیت خارج کردن سرمایه از متارنگ" },
  { id: 6, label: "قابلیت شرکت در مسابقات" },
  { id: 7, label: "قابلیت ورود بخ اتحاد ها " },
  { id: 8, label: "قابلیت تاسیس فروشگاه با دفتر کار" },
  { id: 9, label: "قابلیت مدیریت سلسله" },
  { id: 10, label: "قابلیت همکاری در ساخت بنا" },
];

const Container = styled.div`
  direction: ltr;
  padding: 0 15px;
  height: 80%;
  width: 70%;
  background-color: #000000;
  overflow-y: auto;
  /* @media (min-width: 890px) {
    height: 257px;
  }
  @media (min-width: 880px) {
    height: 190px;
  }
  @media (min-width: 910px) {
    height: 260px;
  }
  @media (min-width: 930px) {
    height: 274px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1180px) {
    height: 577px;
  }
  @media (min-width: 1280px) {
    height: 560px;
  }
  @media (min-width: 1366px) {
    height: 620px;
  } */
`;

const Header = styled.div`
  display: grid;

  grid-template-columns: 1fr 350px;
  justify-content: space-between;
  @media (min-width: 1366px) {
    grid-template-columns: 100px 400px;
  }
`;

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  background-color: #1a1a18;
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: 500;
    color: white;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;

const Settings = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
  margin-top: 15px;

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Buttons = styled.div`
  display: flex;

  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const Background = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const UnderEighteenMember = ({
  setOpenDetails,
  selectedCitizen,
  members,
  setMembers,
  setMode,
}) => {
  const handleAccept = () => {
    if (selectedCitizen) {
      const roleMapping = {
        پدر: "parent",
        مادر: "parent",
        برادر: "siblings",
        خواهر: "siblings",
        همسر: "spouse",
        فرزند: "children",
      };

      const role = roleMapping[selectedCitizen.role];

      // Determine if adding is allowed based on constraints
      const isAllowed = (() => {
        switch (role) {
          case "children":
            return members.children.length < 4;
          case "siblings":
            return members.siblings.length < 4;
          case "spouse":
            return members.spouse.length < 1;
          case "parent":
            return members.parent.length < 2;
          default:
            return false;
        }
      })();

      const category =
        role === "children"
          ? "فرزندان"
          : role === "parent"
          ? "والدین"
          : role === "siblings"
          ? "خواهر و برادر"
          : role === "spouse"
          ? "همسر"
          : "";

      if (isAllowed) {
        setMembers((prevMembers) => ({
          ...prevMembers,
          [role]:
            role === "spouse"
              ? [selectedCitizen] // Replace existing spouse
              : [...prevMembers[role], selectedCitizen], // Add new member
        }));
        console.log(`${selectedCitizen.name} added to ${role}`);
        toast.success(
          `${selectedCitizen.name} با موفقیت به ${category} اضافه شد!`
        );
        setMode(1);
      } else {
        console.log(
          `Cannot add ${selectedCitizen.name} to ${role} due to constraints.`
        );
        toast.error(`بیش از این نمی توانید عضو به ${category} وارد کنید!`);
      }

      setOpenDetails(false);
    }
  };

  return (
    <Background>
      <Container>
        <Header>
          <Title title="دعوت فرزند" />
          <SearchInput placeholder="نام کاربری فرزند خود را جستجو کنید..." />
        </Header>
        <MemberCard selectedCitizen={selectedCitizen} />
        <Title right title="ثبت محدودیت های فرزند زیر 18" />
        <Settings>
          {settings.map((setting) => (
            <Wrapper key={setting.id}>
              <p>{setting.label}</p>
              <OnOff label={setting?.label} />
            </Wrapper>
          ))}
        </Settings>
        <Buttons>
          <Button
            label="بله, قبول میکنم"
            color="#18C08F"
            onclick={handleAccept}
            fit
            textColor="#D7FBF0"
          />
          <Button
            label="خیر, نمی پذیرم"
            color="#C30000"
            onclick={() => setOpenDetails(false)}
            fit
            textColor="#FFFFFF"
          />
        </Buttons>
      </Container>
    </Background>
  );
};

export default UnderEighteenMember;
