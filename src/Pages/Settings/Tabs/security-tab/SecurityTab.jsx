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
        key: "nationality",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "father's name"),
        key: "fname",
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "last name"),
        key: "lname",
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "date of birth"),
        key: "birthdate",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "phone number"),
        key: "phone",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "email"),
        key: "email",
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "address"),
        key: "address",
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "name"),
        key: "name",
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
        key: "about",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "registery date"),
        key: "registered_at",
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "position or direction"),
        key: "position",
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "score"),
        key: "score",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "permissions"),
        key: "licenses",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "license points"),
        key: "license_score",
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "avatar"),
        key: "avatar",
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "job"),
        key: "occupation",
      },
      {
        id: 9,
        title: getFieldTranslationByNames("setting", "education"),
        key: "education",
      },
      {
        id: 10,
        title: getFieldTranslationByNames("setting", "favorite city"),
        key: "loved_city",
      },
      {
        id: 11,
        title: getFieldTranslationByNames("setting", "favorite country"),
        key: "loved_country",
      },
      {
        id: 12,
        title: getFieldTranslationByNames("setting", "favorite language"),
        key: "loved_language",
      },
      {
        id: 13,
        title: getFieldTranslationByNames("setting", "forecast"),
        key: "prediction",
      },
      {
        id: 14,
        title: getFieldTranslationByNames("setting", "pleasant memory"),
        key: "memory",
      },
      {
        id: 15,
        title: getFieldTranslationByNames("setting", "favorites"),
        key: "passions",
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
        key: "amoozeshi_features",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "commercial vods"),
        key: "tejari_features",
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "tourism vods"),
        key: "gardeshgari_features",
      },
      {
        id: 4,
        title: getFieldTranslationByNames("setting", "green space vods"),
        key: "fazasabz_features",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "health vods"),
        key: "behdashti_features",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "administrative vods"),
        key: "edari_features",
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "exhibition vods"),
        key: "nemayeshgah_features",
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
        key: "followers",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "list of followings"),
        key: "following",
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "number of followings"),
        key: "following_count",
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
        key: "establish_store_license",
      },
      {
        id: 2,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create a union"
        ),
        key: "establish_union_license",
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "permission to create a taxi service"
        ),
        key: "establish_taxi_license",
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "permission to establish a school"
        ),
        key: "establish_amoozeshgah_license",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "journalism license"),
        key: "reporter_license",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "contributor license"),
        key: "cooporation_license",
      },
      {
        id: 7,
        title: getFieldTranslationByNames("setting", "developer license"),
        key: "developer_license",
      },
      {
        id: 8,
        title: getFieldTranslationByNames("setting", "express license"),
        key: "inspection_license",
      },
      {
        id: 9,
        title: getFieldTranslationByNames("setting", "merchant license"),
        key: "trading_license",
      },
      {
        id: 10,
        title: getFieldTranslationByNames("setting", "attorney's license"),
        key: "lawyer_license",
      },
      {
        id: 11,
        title: getFieldTranslationByNames("setting", "mayor's license"),
        key: "city_council_license",
      },
      {
        id: 12,
        title: getFieldTranslationByNames("setting", "governor's license"),
        key: "governer_license",
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
        key: "irr_transactions",
        value: true,
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show PSC transactions"),
        key: "psc_transactions",
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in blue color"
        ),
        key: "blue_transactions",
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in yellow"
        ),
        key: "yellow_transactions",
      },
      {
        id: 5,
        title: getFieldTranslationByNames(
          "setting",
          "show transactions in red"
        ),
        key: "red_transactions",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "show sold product"),
        key: "sold_products",
      },
      {
        id: 7,
        title: getFieldTranslationByNames(
          "setting",
          "show purchased properties"
        ),
        key: "bought_products",
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
        key: "recieved_irr_prizes",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show psc bonus received"),
        key: "recieved_psc_prizes",
      },
      {
        id: 3,
        title: getFieldTranslationByNames(
          "setting",
          "show yellow bonus received"
        ),
        key: "recieved_yellow_prizes",
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "show blue bonus received"
        ),
        key: "recieved_blue_prizes",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "show red bonus received"),
        key: "recieved_red_prizes",
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
        key: "bought_golden_keys",
      },
      {
        id: 2,
        title: getFieldTranslationByNames("setting", "show spent golden keys"),
        key: "used_golden_keys",
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
        key: "dynasty_members_photo",
      },
      {
        id: 2,
        title: getFieldTranslationByNames(
          "setting",
          "view profiles of dynasty members"
        ),
        key: "dynasty_members_info",
      },
      {
        id: 3,
        title: getFieldTranslationByNames("setting", "dynasty reward"),
        key: "recieved_dynasty_satisfaction_prizes",
      },
      {
        id: 4,
        title: getFieldTranslationByNames(
          "setting",
          "riyal bonus received in psc unit from dynasty members"
        ),
        key: "recieved_dynasty_referral_profit_prizes",
      },
      {
        id: 5,
        title: getFieldTranslationByNames("setting", "show satisfaction bonus"),
        key: "recieved_satisfaction_prizes",
      },
      {
        id: 6,
        title: getFieldTranslationByNames("setting", "show satisfaction bonus"),
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
