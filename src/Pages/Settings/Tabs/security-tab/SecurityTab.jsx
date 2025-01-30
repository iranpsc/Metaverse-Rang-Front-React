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
    translationId: 7971,
    options: [
      {
        id: 1,
        translationId: 7978,
        key: "nationality",
      },
      {
        id: 2,
        title: "father's name",
        key: "fname",
      },
      {
        id: 3,
        translationId: 7992,
        key: "lname",
      },
      {
        id: 4,
        translationId: 7999,
        key: "birthdate",
      },
      {
        id: 5,
        translationId: 8006,
        key: "phone",
      },
      {
        id: 6,
        translationId: 8013,
        key: "email",
      },
      {
        id: 7,
        translationId: 8020,
        key: "address",
      },
      {
        id: 8,
        translationId: 8027,
        key: "name",
      },
    ],
  },
  {
    id: 2,
    translationId: 8034,
    options: [
      {
        id: 1,
        translationId: 8041,
        key: "about",
      },
      {
        id: 2,
        translationId: 8048,
        key: "registered_at",
      },
      {
        id: 3,
        translationId: 8055,
        key: "position",
      },
      {
        id: 4,
        translationId: 8069,
        key: "score",
      },
      {
        id: 5,
        translationId: 8076,
        key: "licenses",
      },
      {
        id: 6,
        translationId: 8083,
        key: "license_score",
      },
      {
        id: 7,
        translationId: 8090,
        key: "avatar",
      },
      {
        id: 8,
        translationId: 8097,
        key: "occupation",
      },
      {
        id: 9,
        translationId: 8104,
        key: "education",
      },
      {
        id: 10,
        translationId: 8111,
        key: "loved_city",
      },
      {
        id: 11,
        translationId: 8118,
        key: "loved_country",
      },
      {
        id: 12,
        translationId: 8125,
        key: "loved_language",
      },
      {
        id: 13,
        translationId: 8132,
        key: "prediction",
      },
      {
        id: 14,
        translationId: 8139,
        key: "memory",
      },
      {
        id: 15,
        translationId: 8146,
        key: "passions",
      },
    ],
  },
  {
    id: 3,
    translationId: 8153,
    options: [
      {
        id: 1,
        translationId: 8160,
        key: "amoozeshi_features",
      },
      {
        id: 2,
        translationId: 8174,
        key: "tejari_features",
      },
      {
        id: 3,
        translationId: 8181,
        key: "gardeshgari_features",
      },
      {
        id: 4,
        translationId: 8188,
        key: "fazasabz_features",
      },
      {
        id: 5,
        translationId: 8195,
        key: "behdashti_features",
      },
      {
        id: 6,
        translationId: 8202,
        key: "edari_features",
      },
      {
        id: 7,
        translationId: 8209,
        key: "nemayeshgah_features",
      },
    ],
  },
  {
    id: 4,
    translationId: 8216,
    options: [
      {
        id: 1,
        translationId: 8223,
        key: "followers",
      },
      {
        id: 2,
        translationId: 8237,
        key: "following",
      },
      {
        id: 3,
        translationId: 8244,
        key: "following_count",
      },
    ],
  },
  {
    id: 5,
    translationId: 8251,
    options: [
      {
        id: 1,
        translationId: 8258,

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
        translationId: 8279,
        key: "establish_amoozeshgah_license",
      },
      {
        id: 5,
        translationId: 8286,
        key: "reporter_license",
      },
      {
        id: 6,
        translationId: 8293,
        key: "cooporation_license",
      },
      {
        id: 7,
        translationId: 8300,
        key: "developer_license",
      },
      {
        id: 8,
        translationId: 8307,
        key: "inspection_license",
      },
      {
        id: 9,
        translationId: 8314,
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
    translationId: 8363,
    options: [
      {
        id: 1,
        translationId: 8370,
        key: "irr_transactions",
        value: true,
      },
      {
        id: 2,
        translationId: 8377,
        key: "psc_transactions",
      },
      {
        id: 3,
        translationId: 8384,
        key: "blue_transactions",
      },
      {
        id: 4,
        translationId: 8391,
        key: "yellow_transactions",
      },
      {
        id: 5,
        translationId: 8398,
        key: "red_transactions",
      },
      {
        id: 6,
        translationId: 8419,
        key: "sold_products",
      },
      {
        id: 7,
        translationId: 8412,
        key: "bought_products",
      },
    ],
  },
  {
    id: 7,
    translationId: 8433,
    options: [
      {
        id: 1,
        translationId: 8440,
        key: "recieved_irr_prizes",
      },
      {
        id: 2,
        translationId: 8447,
        key: "recieved_psc_prizes",
      },
      {
        id: 3,
        translationId: 8454,
        key: "recieved_yellow_prizes",
      },
      {
        id: 4,
        translationId: 8461,
        key: "recieved_blue_prizes",
      },
      {
        id: 5,
        translationId: 8468,
        key: "recieved_red_prizes",
      },
    ],
  },
  {
    id: 8,
    translationId: 8503,
    options: [
      {
        id: 1,
        translationId: 8510,
        key: "bought_golden_keys",
      },
      {
        id: 2,
        translationId: 8510,
        key: "used_golden_keys",
      },
    ],
  },
  {
    id: 9,
    translationId: 8531,
    options: [
      {
        id: 1,
        translationId: 8538,
        key: "bought_golden_keys",
      },
      {
        id: 2,
        translationId: 8545,
        key: "notice",
      },
      {
        id: 3,
        translationId: 8552,
        key: "violation_of_the_rules",
      },
      {
        id: 4,
        translationId: 8559,
        key: "warning",
      },
      {
        id: 5,
        translationId: 8566,
        key: "negative_points",
      },
    ],
  },

  {
    id: 10,
    translationId: 8573,
    options: [
      {
        id: 1,
        translationId: 8580,
        key: "dynasty_members_photo",
      },
      {
        id: 2,
        translationId: 8587,
        key: "dynasty_members_info",
      },
      {
        id: 3,
        translationId: 8595,
        key: "recieved_dynasty_satisfaction_prizes",
      },
      {
        id: 4,
        translationId: 8601,
        key: "recieved_dynasty_referral_profit_prizes",
      },
      {
        id: 5,
        translationId: 8608,
        key: "recieved_satisfaction_prizes",
      },
      {
        id: 6,
        translationId: 8608,
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
    const filteredOptions = item.options.filter((option) =>
      option.translationId
        ? getFieldTranslationByNames(option.translationId)
            ?.toLowerCase()
            ?.includes(searched.toLowerCase()) ||
          getFieldTranslationByNames(item.translationId)
            ?.toLowerCase()
            ?.includes(searched.toLowerCase())
        : ""
    );
    return (
      filteredOptions.length > 0 ||
      getFieldTranslationByNames(item.translationId)
        ?.toLowerCase()
        ?.includes(searched.toLowerCase())
    );
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
