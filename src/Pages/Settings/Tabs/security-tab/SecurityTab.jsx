import Item from "./Item";

import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../../../../Components/SearchInput";

const Wrapper = styled.div`
  display: grid;
  margin-top: 20px;
  padding-bottom: 20px;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Container = styled.div`
  padding-top: 20px;
  padding-right: 15px;
  overflow-y: auto;
  padding-right: 15px;
  height: 265px;
  direction: ltr;
  @media (min-width: 840px) {
    height: 280px;
  }
  @media (min-width: 890px) {
    height: 300px;
  }
  @media (min-width: 930px) {
    height: 320px;
  }
  @media (min-width: 1400px) {
    height: 610px;
  }
  @media (min-width: 1500px) {
    padding-right: 15px;
  }
  @media (min-width: 1900px) {
    height: 685px;
    padding-right: 0;
  }
`;

const items = [
  {
    id: 1,
    label: "مشخصات حقیقی",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 2,
    label: "املاک و_مستغلات",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 3,
    label: "تخلفات",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 4,
    label: "تخلفات",
    options: [
      { id: 1, title: "تست1" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 5,
    label: "تخلفات",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "تست2" },
    ],
  },
  {
    id: 6,
    label: "مشخصات شهروندی",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 7,
    label: "روابط شهروندی",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 8,
    label: "تراکنش ها",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "تست3" },
    ],
  },
  {
    id: 9,
    label: "پاداش های_دریافتی",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 10,
    label: "متعلقات شهروند",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
  {
    id: 11,
    label: "سلسله خانوادگی",
    options: [
      { id: 1, title: "vod های آموزشی" },
      { id: 2, title: "vod های مسکونی" },
    ],
  },
];

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecurityTab = () => {
  const [searched, setSearched] = useState("");
  const searchedItems = items.filter((item) => {
    const filteredOptions = item.options.filter(
      (option) =>
        option.title.includes(searched) || item.label.includes(searched)
    );
    return filteredOptions.length > 0 || item.label.includes(searched);
  });
  return (
    <Container>
      <SearchInput
        placeholder="نام تنظیمات خود را بنویسید"
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <Wrapper>
        <Left>
          {searchedItems.slice(5, 11).map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </Left>
        <Right>
          {searchedItems.slice(0, 5).map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SecurityTab;
