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
    label: "real specifications",
    options: [
      {
        id: 1,
        title: "nationality",
        key: "nationality",
      },
      {
        id: 2,
        title: "father's name",
        key: "fname",
      },
      {
        id: 3,
        title: "last name",
        key: "lname",
      },
      {
        id: 4,
        title: "date of birth",
        key: "birthdate",
      },
      {
        id: 5,
        title: "phone number",
        key: "phone",
      },
      {
        id: 6,
        title: "email",
        key: "email",
      },
      {
        id: 7,
        title: "address",
        key: "address",
      },
      {
        id: 8,
        title: "name",
        key: "name",
      },
    ],
  },
  {
    id: 2,
    label: "citizenship profile",
    options: [
      {
        id: 1,
        title: "about",
        key: "about",
      },
      {
        id: 2,
        title: "registery date",
        key: "registered_at",
      },
      {
        id: 3,
        title: "position or direction",
        key: "position",
      },
      {
        id: 4,
        title: "score",
        key: "score",
      },
      {
        id: 5,
        title: "permissions",
        key: "licenses",
      },
      {
        id: 6,
        title: "license points",
        key: "license_score",
      },
      {
        id: 7,
        title: "avatar",
        key: "avatar",
      },
      {
        id: 8,
        title: "job",
        key: "occupation",
      },
      {
        id: 9,
        title: "education",
        key: "education",
      },
      {
        id: 10,
        title: "favorite city",
        key: "loved_city",
      },
      {
        id: 11,
        title: "favorite country",
        key: "loved_country",
      },
      {
        id: 12,
        title: "favorite language",
        key: "loved_language",
      },
      {
        id: 13,
        title: "forecast",
        key: "prediction",
      },
      {
        id: 14,
        title: "pleasant memory",
        key: "memory",
      },
      {
        id: 15,
        title: "favorites",
        key: "passions",
      },
    ],
  },
  {
    id: 3,
    label: "real estates",
    options: [
      {
        id: 1,
        title: "educational vods",
        key: "amoozeshi_features",
      },
      {
        id: 2,
        title: "commercial vods",
        key: "tejari_features",
      },
      {
        id: 3,
        title: "tourism vods",
        key: "gardeshgari_features",
      },
      {
        id: 4,
        title: "green space vods",
        key: "fazasabz_features",
      },
      {
        id: 5,
        title: "health vods",
        key: "behdashti_features",
      },
      {
        id: 6,
        title: "administrative vods",
        key: "edari_features",
      },
      {
        id: 7,
        title: "exhibition vods",
        key: "nemayeshgah_features",
      },
    ],
  },
  {
    id: 4,
    label: "citizenship relations",
    options: [
      {
        id: 1,
        title: "list of followers",
        key: "followers",
      },
      {
        id: 2,
        title: "list of followings",
        key: "following",
      },
      {
        id: 3,
        title: "number of followings",
        key: "following_count",
      },
    ],
  },
  {
    id: 5,
    label: "licenses received",
    options: [
      {
        id: 1,
        title: "permission to create a store",

        key: "establish_store_license",
      },
      {
        id: 2,
        title: "permission to create a union",
        key: "establish_union_license",
      },
      {
        id: 3,
        title: "permission to create a taxi service",
        key: "establish_taxi_license",
      },
      {
        id: 4,
        title: "permission to establish a school",
        key: "establish_amoozeshgah_license",
      },
      {
        id: 5,
        title: "journalism license",
        key: "reporter_license",
      },
      {
        id: 6,
        title: "contributor license",
        key: "cooporation_license",
      },
      {
        id: 7,
        title: "developer license",
        key: "developer_license",
      },
      {
        id: 8,
        title: "express license",
        key: "inspection_license",
      },
      {
        id: 9,
        title: "merchant license",
        key: "trading_license",
      },
      {
        id: 10,
        title: "attorney's license",
        key: "lawyer_license",
      },
      {
        id: 11,
        title: "mayor's license",
        key: "city_council_license",
      },
      {
        id: 12,
        title: "governor's license",
        key: "governer_license",
      },
    ],
  },
  {
    id: 6,
    label: "transactions",
    options: [
      {
        id: 1,
        title: "show Riyal transactions",
        key: "irr_transactions",
        value: true,
      },
      {
        id: 2,
        title: "show PSC transactions",
        key: "psc_transactions",
      },
      {
        id: 3,
        title: "show transactions in blue color",
        key: "blue_transactions",
      },
      {
        id: 4,
        title: "show transactions in yellow",
        key: "yellow_transactions",
      },
      {
        id: 5,
        title: "show transactions in red",
        key: "red_transactions",
      },
      {
        id: 6,
        title: "show sold product",
        key: "sold_products",
      },
      {
        id: 7,
        title: "show purchased properties",
        key: "bought_products",
      },
    ],
  },
  {
    id: 7,
    label: "rewards received",
    options: [
      {
        id: 1,
        title: "show the bonus received rial",
        key: "recieved_irr_prizes",
      },
      {
        id: 2,
        title: "show psc bonus received",
        key: "recieved_psc_prizes",
      },
      {
        id: 3,
        title: "show yellow bonus received",
        key: "recieved_yellow_prizes",
      },
      {
        id: 4,
        title: "show blue bonus received",
        key: "recieved_blue_prizes",
      },
      {
        id: 5,
        title: "show red bonus received",
        key: "recieved_red_prizes",
      },
    ],
  },
  {
    id: 8,
    label: "display the purchased golden key",
    options: [
      {
        id: 1,
        title: "show spent golden keys",
        key: "bought_golden_keys",
      },
      {
        id: 2,
        title: "show spent golden keys",
        key: "used_golden_keys",
      },
    ],
  },
  {
    id: 9,
    label: "infractions",
    options: [],
  },
  {
    id: 10,
    label: "complaints",
    options: [],
  },
  {
    id: 11,
    label: "notice",
    options: [],
  },
  {
    id: 12,
    label: "violation of the rules",
    options: [],
  },
  {
    id: 13,
    label: "show life status",
    options: [],
  },
  {
    id: 14,
    label: "sum of negative points",
    options: [],
  },
  {
    id: 15,
    label: "family lineage",
    options: [
      {
        id: 1,
        title: "display the image of the members of the dynasty",
        key: "dynasty_members_photo",
      },
      {
        id: 2,
        title: "view profiles of dynasty members",
        key: "dynasty_members_info",
      },
      {
        id: 3,
        title: "dynasty reward",
        key: "recieved_dynasty_satisfaction_prizes",
      },
      {
        id: 4,
        title: "riyal bonus received in psc unit from dynasty members",
        key: "recieved_dynasty_referral_profit_prizes",
      },
      {
        id: 5,
        title: "show satisfaction bonus",
        key: "recieved_satisfaction_prizes",
      },
      {
        id: 6,
        title: "show satisfaction bonus",
        key: "recieved_satisfaction_prizes",
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
  const [privacy, setPrivacy] = useState({});
  const [itemsWithValues, setItemsWithValues] = useState([]);

  const searchedItems = itemsWithValues.filter((item) => {
    const filteredOptions = item.options.filter(
      (option) =>
        option.title.includes(searched) || item.label.includes(searched)
    );
    return filteredOptions.length > 0 || item.label.includes(searched);
  });

  const { Request } = useRequest();

  useEffect(() => {
    Request("privacy").then((response) => {
      const privacyData = response.data.data;
      const updatedItems = items.map((item) => {
        const updatedOptions = item.options.map((option) => {
          return {
            ...option,
            value: privacyData[option.key] || false, // اگر موجود نبود false تنظیم می‌شود
          };
        });

        return {
          ...item,
          options: updatedOptions,
        };
      });

      setPrivacy(privacyData);
      setItemsWithValues(updatedItems); // آیتم‌ها با مقدار value تنظیم می‌شوند
    });
  }, []);
  console.log("permission to establish a school");
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
            <Item key={item.id} {...item} privacy={privacy} />
          ))}
        </Left>
        <Right>
          {searchedItems.slice(0, 5).map((item) => (
            <Item key={item.id} {...item} privacy={privacy} />
          ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SecurityTab;
