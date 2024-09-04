import Item from "./Item";

import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchInput from "../../../../Components/SearchInput";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

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
    label: getFieldTranslationByNames("setting", "real specifications"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "nationality"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "father's name"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "last name"),
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "date of birth"),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "phone number"),
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "email"),
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "address"),
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "name"),
      },
    ],
  },
  {
    id: 2,
    label: getFieldTranslationByNames("setting", "citizenship profile"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "about"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "registery date"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "position or direction"),
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "score"),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "permissions"),
      },

      {
        id: 6,
        title: getFieldTranslationByNames("setting", "license points"),
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "avatar"),
      },

      {
        id: 8,
        title: getFieldTranslationByNames("setting", "job"),
      },
      {
        id: 9,
        title: getFieldTranslationByNames("setting", "education"),
      },
      {
        id: 10,
        title: getFieldTranslationByNames("setting", "favorite city"),
      },
      {
        id: 11,
        title: getFieldTranslationByNames("setting", "favorite country"),
      },
      {
        id: 12,
        title: getFieldTranslationByNames("setting", "favorite language"),
      },
      {
        id: 13,
        title: getFieldTranslationByNames("setting", "forecast"),
      },
      {
        id: 14,
        title: getFieldTranslationByNames("setting", "pleasant memory"),
      },
      {
        id: 15,
        title: getFieldTranslationByNames("setting", "favorites"),
      },
    ],
  },
  {
    id: 3,
    label: getFieldTranslationByNames("setting", "real estates"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "educational vods"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "commercial vods"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "tourism vods"),
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "green space vods"),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "health vods"),
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "administrative vods"),
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "exhibition vods"),
      },
    ],
  },
  {
    id: 4,
    label: getFieldTranslationByNames("setting", "citizenship relations"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "list of followers"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "list of followings"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "number of followings"),
      },
    ],
  },
  {
    id: 5,
    label: getFieldTranslationByNames("setting", "licenses received"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create a store"
        ),
      },
      {
        id: 2,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create a store"
        ),
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create an alliance"
        ),
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create a store"
        ),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "taxi management license"),
      },
      {
        id: 7,
        title: getFieldTranslationByNames(
          "setting",
          "permission to establish a school"
        ),
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "journalism license"),
      },
      {
        id: 9,
        title: getFieldTranslationByNames("setting", "contributor license"),
      },
      {
        id: 10,
        title: getFieldTranslationByNames("setting", "developer license"),
      },
      {
        id: 11,
        title: getFieldTranslationByNames("setting", "express license"),
      },
      {
        id: 12,
        title: getFieldTranslationByNames("setting", "merchant license"),
      },
      {
        id: 13,
        title: getFieldTranslationByNames("setting", "attorney's license"),
      },
      {
        id: 14,
        title: getFieldTranslationByNames("setting", "mayor's license"),
      },
      {
        id: 15,
        title: getFieldTranslationByNames("setting", "legislator's permission"),
      },
      {
        id: 17,
        title: getFieldTranslationByNames("setting", "governor's license"),
      },
      {
        id: 18,
        title: getFieldTranslationByNames("setting", "ministry license"),
      },
      {
        id: 19,
        title: getFieldTranslationByNames("setting", "gateway authorization"),
      },
    ],
  },
  {
    id: 6,
    label: getFieldTranslationByNames("setting", "transactions"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "show Riyal transactions"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show PSC transactions"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in blue color"
        ),
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in yellow"
        ),
      },
      {
        id: 5,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in red"
        ),
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "show sold product"),
      },
      {
        id: 7,
        title: getFieldTranslationByNames(
          "setting",
          "show purchased properties"
        ),
      },
    ],
  },
  {
    id: 7,
    label: getFieldTranslationByNames("setting", "rewards received"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames(
          "setting",
          "show the bonus received rial"
        ),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show psc bonus received"),
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "show yellow bonus received"
        ),
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "show blue bonus received"
        ),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "show red bonus received"),
      },
      {
        id: 6,
        title: getFieldTranslationByNames(
          "setting",
          "receive a satisfaction bonus"
        ),
      },
      {
        id: 7,
        title: getFieldTranslationByNames(
          "setting",
          "show maximum effect bonus received"
        ),
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "psc paid"),
      },
      {
        id: 9,
        title: getFieldTranslationByNames("setting", "rial paid"),
      },
    ],
  },
  {
    id: 8,
    label: getFieldTranslationByNames(
      "setting",
      "display the purchased golden key"
    ),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames("setting", "show spent golden keys"),
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show spent golden keys"),
      },
    ],
  },
  {
    id: 9,
    label: getFieldTranslationByNames("setting", "infractions"),
    options: [],
  },
  {
    id: 10,
    label: getFieldTranslationByNames("setting", "complaints"),
    options: [],
  },
  {
    id: 11,
    label: getFieldTranslationByNames("setting", "notice"),
    options: [],
  },
  {
    id: 12,
    label: getFieldTranslationByNames("setting", "violation of the rules"),
    options: [],
  },
  {
    id: 13,
    label: getFieldTranslationByNames("setting", "show life status"),
    options: [],
  },
  {
    id: 14,
    label: getFieldTranslationByNames("setting", "sum of negative points"),
    options: [],
  },
  {
    id: 15,
    label: getFieldTranslationByNames("setting", "family lineage"),
    options: [
      {
        id: 1,
        title: getFieldTranslationByNames(
          "setting",
          "display the image of the members of the dynasty"
        ),
      },
      {
        id: 2,
        title: getFieldTranslationByNames(
          "setting",
          "view profiles of dynasty members"
        ),
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "dynasty reward"),
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "riyal bonus received in psc unit from dynasty members"
        ),
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "show satisfaction bonus"),
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "show satisfaction bonus"),
      },
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
  const { Request } = useRequest();

  const [generalSettings, setGeneralSettings] = useState({});

  useEffect(() => {
    Request("privacy").then((response) => {
      setGeneralSettings({ ...response.data.data });
    });
  }, []);
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
