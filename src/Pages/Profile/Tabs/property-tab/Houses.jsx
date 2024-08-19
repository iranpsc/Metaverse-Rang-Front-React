import CardItem from "./CardItem";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Title from "../../Title";
import business from "../../../assets/images/profile/building.png";
import education from "../../../assets/images/profile/courthouse.png";
import house from "../../../assets/images/profile/house.png";
import styled from "styled-components";
import { useState } from "react";

const List = styled.div`
  display: flex;
  flex-direction: column;
  direction: ltr;
  gap: 20px;
  padding-top: 20px;
`;
const Container = styled.div`
  padding-bottom: 20px;
  padding-right: 15px;
  padding-top: 20px;
  direction: ltr;
  overflow-y: auto;
  height: 226px;
  @media (min-width: 840px) {
    height: 254px;
  }
  @media (min-width: 880px) {
    height: 209px;
  }
  @media (min-width: 890px) {
    height: 278px;
  }
  @media (min-width: 930px) {
    height: 294px;
  }
  @media (min-width: 1024px) {
    height: 381px;
  }
  @media (min-width: 1180px) {
    height: 579px;
  }
  @media (min-width: 1280px) {
    height: 561px;
  }
  @media (min-width: 1360px) {
    height: 622px;
  }
  @media (min-width: 1400px) {
    height: 538px;
  }
  @media (min-width: 1920px) {
    height: 619px;
  }
`;
const Provider = styled.div`
  position: relative;
  color: #dedee9;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s linear;
  &:hover {
    background: #fdfdfd21;
  }
  h1 {
    font-size: 16px;
    font-weight: 400;
  }
  span {
    position: absolute;
    left: 10px;
    top: 5px;
    &:hover {
      color: red;
      cursor: pointer;
      transition: all 0.2s linear;
    }
  }
`;
const Filter = styled.div`
  position: absolute;
  top: 55px;
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 5px;
  @media (min-width: 1400px) {
    padding: 20px;
    top: 60px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  span {
    white-space: nowrap;
  }
`;
const Select = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: #2c2c2c;
  color: #dedee9;
  padding: 10px 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div`
  display: grid;
  direction: rtl;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 150px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 200px;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 200px;
  }
`;
const Search = styled.div`
  position: relative;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 10px 12px;
  color: #84858f;
  direction: rtl;
  background-color: #2c2c2c;
  display: grid;
  align-items: center;
  gap: 50px;
  svg {
    color: white;
  }
  input {
    position: absolute;
    width: 100% !important;
    top: 0;
    padding-right: 55px;
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    outline: none;
    border: none;
    color: white;
  }
`;
const cards_items = [
  {
    id: 1,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA91-85749",
    color: "#ff000021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 2,
    name: "املاک مسکونی",
    photo: house,
    code: "QA76-85273",
    color: "#ffc80021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 120,
    slug: "house",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 3,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA84-79462",
    color: "#ff000021",
    address: "میرمیران، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 200,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 4,
    name: "املاک مسکونی",
    photo: house,
    code: "QA34-201497",
    color: "#ffc80021",
    address: "والفجر، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 120,
    slug: "house",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 5,
    name: "املاک آموزشی",
    photo: education,
    code: "QA81-89462",
    color: "#0066ff21",
    address: "والفجر، نوروزیان، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "education",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 6,
    name: "ساختمان تجاری",
    photo: business,
    code: "QA71-79543",
    color: "#ff000021",
    address: "میرمیران، میثم، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 200,
    slug: "industry",
    psc: 3000,
    rial: 3000000,
  },
  {
    id: 7,
    name: "املاک آموزشی",
    photo: education,
    code: "QA46-96524",
    color: "#0066ff21",
    address: "میرمیران، میثم، پونک، شهر قزوین، بزرگراه آذری، خیابان گنجوی",
    meter: 180,
    slug: "education",
    psc: 3000,
    rial: 3000000,
  },
];

const Houses = () => {
  const [searched, setSearched] = useState("");
  const [cards, setCards] = useState(cards_items);
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState({
    industry: false,
    house: false,
    education: false,
  });

  const filteredItems = cards.filter((item) => {
    const query = searched.toUpperCase().trim();
    const codeMatch = item.code.includes(query);
    const addressMatch = item.address.includes(query);
    const meterMatch = item.meter.toString().includes(query);
    const propertyMatch =
      (!property.education && !property.house && !property.industry) ||
      (property.education && item.slug === "education") ||
      (property.house && item.slug === "house") ||
      (property.industry && item.slug === "industry");

    return (codeMatch || addressMatch || meterMatch) && propertyMatch;
  });

  return (
    <Container>
      <div dir="rtl">
        <Title title="املاک و مستغلات" />
      </div>
      <Div>
        <Search>
          <FiSearch size={34} />
          <input
            type="text"
            placeholder="جستجو کنید..."
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
        </Search>
        <Wrapper>
          <Select onClick={() => setOpen(!open)}>
            <span>
              املاک{" "}
              {property.industry
                ? "تجاری"
                : property.education
                ? "آمورشی"
                : "مسکونی"}
            </span>
            <MdKeyboardArrowDown
              style={{
                transform: `${open ? "rotate(180deg)" : "rotate(360deg)"}`,
              }}
            />
          </Select>
          {open && (
            <Filter>
              <Provider
                style={{
                  color: `${property.industry && "#FF0000"}`,
                  backgroundColor: `${property.industry && "#ff000021"}`,
                }}
                onClick={() => {
                  setProperty({ ...property, industry: true });
                  setOpen(false);
                }}
              >
                <h1>املاک تجاری</h1>
                {property.industry && (
                  <span
                    onClick={(e) => {
                      setProperty({ ...property, industry: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
              <Provider
                style={{
                  color: `${property.education && "#0066FF"}`,
                  backgroundColor: `${property.education && "#0066ff21"}`,
                }}
                onClick={() => {
                  setProperty({ ...property, education: true });
                  setOpen(false);
                }}
              >
                <h1>املاک آموزشی</h1>
                {property.education && (
                  <span
                    onClick={(e) => {
                      setProperty({ ...property, education: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
              <Provider
                style={{
                  color: `${property.house && "#FFC700"}`,
                  backgroundColor: `${
                    property.house &&
                    "var(--Button-Primary---bg---off, #332800)"
                  }`,
                }}
                onClick={() => {
                  setProperty({ ...property, house: true });
                  setOpen(false);
                }}
              >
                <h1>املاک مسکونی</h1>
                {property.house && (
                  <span
                    onClick={(e) => {
                      setProperty({ ...property, house: false });
                      e.stopPropagation();
                      setOpen(false);
                    }}
                  >
                    X
                  </span>
                )}
              </Provider>
            </Filter>
          )}
        </Wrapper>
      </Div>
      <List>
        {filteredItems.map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </List>
    </Container>
  );
};

export default Houses;
