import MemberCard from "./MemberCard";

import styled from "styled-components";
import { toast } from "react-toastify";
import Title from "../../../../../Components/Title";
import Button from "../../../../../Components/Button";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";

const Container = styled.div`
  height: 80%;
  width: 70%;
  background-color: #000000;
  direction: ltr;
  padding: 15px;
  overflow-y: auto;
  /* @media (min-width: 890px) {
    height: 258px;
  }
  @media (min-width: 880px) {
    height: 187px;
  }
  @media (min-width: 930px) {
    height: 274px;
  }
  @media (min-width: 910px) {
    height: 254px;
  }
  @media (min-width: 1024px) {
    height: 380px;
  }
  @media (min-width: 1280px) {
    height: auto;
  } */
  /* @media (min-width: 1400px) {
    padding-right: 0;
  } */
`;

const Header = styled.div`
  display: grid;

  grid-template-columns: 100px 400px;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const Texts = styled.div`
  margin-top: 30px;

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    &:last-of-type {
      font-weight: 600;
      color: #c30000;
      margin-top: 20px;
    }
  }
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

const SpouseSubmit = ({
  setOpenDetails,
  selectedCitizen,
  members,
  setMembers,
  setMode,
}) => {
  const handleAccept = () => {
    if (selectedCitizen) {
      // Determine the role category
      let roleCategory;
      switch (selectedCitizen.role) {
        case "پدر":
        case "مادر":
          roleCategory = "parent";
          break;
        case "برادر":
        case "خواهر":
          roleCategory = "siblings";
          break;
        case "همسر":
          roleCategory = "spouse";
          break;
        case "فرزند":
          roleCategory = "children";
          break;
        default:
          return;
      }

      // Determine if adding is allowed based on constraints
      const isAllowed = (() => {
        switch (roleCategory) {
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
        roleCategory === "children"
          ? "فرزندان"
          : roleCategory === "parent"
          ? "والدین"
          : roleCategory === "siblings"
          ? "خواهر و برادر"
          : roleCategory === "spouse"
          ? "همسر"
          : "";
      if (isAllowed) {
        setMembers((prevMembers) => ({
          ...prevMembers,
          [roleCategory]:
            roleCategory === "spouse"
              ? [selectedCitizen] // Replace existing spouse
              : [...prevMembers[roleCategory], selectedCitizen], // Add new member
        }));
        toast.success(
          `${selectedCitizen.name} با موفقیت به ${category} اضافه شد!`
        );
        console.log(`${selectedCitizen.name} added to ${roleCategory}`);
        setMode(1);
      } else {
        toast.error(`بیش از این نمی توانید عضو به ${category} وارد کنید!`);
        console.log(
          `Cannot add ${selectedCitizen.name} to ${roleCategory} due to constraints.`
        );
        setOpenDetails(false);
      }
    }
  };
  console.log(selectedCitizen);
  return (
    <Background>
      <Container>
        <Header>
          <Title title={getFieldTranslationByNames(832)} />
        </Header>
        <MemberCard selectedCitizen={selectedCitizen} />
        <Texts>
          <p>
            در صورت تایید (شهروند مورد نظر به عنوان همسر) یک پیام تاییدیه برای
            شهروند ارسال میشود و در صورت تایید اطلاعات سلسله در بانک اطلاعات
            مرکزی متارنگ ذخیره خواهد شد. سلسله خانوادگی قابلیت ویرایش نخواهد
            داشت و همسر شما در آینده نمی تواند شما را حذف کند و همچنین شما نیز
            نمیتوانید همسر خود را حذف نمایید.
          </p>
          <p>
            قابلیت ویرایش تنظیمات دسترسی همسر شما در هر زمان به صورت یک طرفه از
            سمت شما امکان پذیر است.
          </p>
          <p>
            همسر شما تنها تا قبل از سن قانونی توسط شما محدود خواهد شد. (سن
            قانونی ۱۸)
          </p>
          <p>
            جریمه‌هایی که در خصوص دروغ‌گویی توسط دادگاه متارنگ در نظر گرفته
            می‌شود بسیار سنگین خواهد بود
          </p>
        </Texts>
        <Buttons>
          <Button
            label={getFieldTranslationByNames(823)}
            color="#18C08F"
            onclick={handleAccept} // Fixed typo here
            fit
            textColor="#D7FBF0"
          />
          <Button
            label={getFieldTranslationByNames(824)}
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

export default SpouseSubmit;
