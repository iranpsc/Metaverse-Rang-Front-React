import CardItem from "./CardItem";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import business from "../../../../assets/images/building.png";
import education from "../../../../assets/images/courthouse.png";
import house from "../../../../assets/images/house.png";
import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import Title from "../../../../components/Title";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useParams } from "react-router-dom";
import Container from "../../../../components/Common/Container";
import SearchInput from "../../../../components/SearchInput";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;
const Provider = styled.div`
  position: relative;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s linear;

  color: ${(props) =>
    props.industry
      ? "#FF0000"
      : props.education
      ? "#0066FF"
      : props.house
      ? "#FFC700"
      : props.theme.colors.newColors.shades.title};

  background-color: ${(props) =>
    props.industry
      ? "#ff000021"
      : props.education
      ? "#0066ff21"
      : props.house
      ? "#ffc70021"
      : "transparent"};

  &:hover {
    background-color: ${(p) => p.hover || p.theme.colors.shades[80]};
  }

  h1 {
    font-size: 16px;
    font-weight: 400;
  }

  span {
    position: absolute;
    left: 10px;
    top: 5px;
    color: red;
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;

const Filter = styled.div`
  position: absolute;
  top: 55px;
  width: 175px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
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
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 10px 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div`
  display: grid;
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
const Houses = () => {
  const [searched, setSearched] = useState("");
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState({
    industry: false,
    house: false,
    education: false,
  });
  const { Request } = useRequest();
  const [features, setFeatures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { id } = useParams();

  const loadMoreFeatures = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    const endpoint = id
      ? `players/hm-2000002/assets`
      : `my-features?page=${page}`;
    Request(endpoint).then((response) => {
      if (!response.data.data.length || !response.data.links?.next) {
        setHasMore(false);
        setLoading(false);
        return;
      }

      const enhancedFeatures = response.data.data.map((feature) => {
        let newProperties = { ...feature.properties };

        if (feature.properties.karbari === "m") {
          newProperties = {
            ...newProperties,
            name: "477",
            photo: house,
            color: "#ffc80021",
            slug: "house",
          };
        } else if (feature.properties.karbari === "t") {
          newProperties = {
            ...newProperties,
            name: "475",
            photo: business,
            color: "#ff000021",
            slug: "industry",
          };
        } else if (feature.properties.karbari === "a") {
          newProperties = {
            ...newProperties,
            name: "476",
            photo: education,
            color: "#0066ff21",
            slug: "education",
          };
        }

        return {
          ...feature,
          properties: newProperties,
        };
      });
      setFeatures((prevFeatures) => [...prevFeatures, ...enhancedFeatures]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    });
  }, [page, loading, hasMore, id]);

  useEffect(() => {
    loadMoreFeatures(); // Initial load
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom && !loading && hasMore) {
        loadMoreFeatures();
      }
    };

    const container = document.querySelector("#scrollable-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadMoreFeatures, loading, hasMore]);

  const filteredItems = features.filter((item) => {
    const query = searched.toUpperCase().trim();
    const codeMatch = item.properties.id.includes(query);
    const addressMatch = item.properties.address.includes(query);
    const meterMatch = item.properties.area.toString().includes(query);
    const propertyMatch =
      (!property.education && !property.house && !property.industry) ||
      (property.education && item.properties.slug === "education") ||
      (property.house && item.properties.slug === "house") ||
      (property.industry && item.properties.slug === "industry");

    return (codeMatch || addressMatch || meterMatch) && propertyMatch;
  });

  return (
    <Container id="scrollable-container">
      <div>
        <Title title={getFieldTranslationByNames("58")} />
      </div>
      <Div>
        <SearchInput
          placeholder={getFieldTranslationByNames("57")}
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
        <Wrapper>
          <Select onClick={() => setOpen(!open)}>
            <span>
              {property.industry
                ? getFieldTranslationByNames("475")
                : property.education
                ? getFieldTranslationByNames("476")
                : getFieldTranslationByNames("477")}
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
                industry={property.industry}
                hover="#ff000021"
                onClick={() => {
                  setProperty({ ...property, industry: true });
                  setOpen(false);
                }}
              >
                <h1>{getFieldTranslationByNames("475")}</h1>
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
                education={property.education}
                hover="#0066ff21"
                onClick={() => {
                  setProperty({ ...property, education: true });
                  setOpen(false);
                }}
              >
                <h1>{getFieldTranslationByNames("476")}</h1>
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
                house={property.house}
                hover="#ffc70021"
                onClick={() => {
                  setProperty({ ...property, house: true });
                  setOpen(false);
                }}
              >
                <h1>{getFieldTranslationByNames("477")}</h1>
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
          <CardItem {...card.properties} key={card.id} navigateId={card.id} />
        ))}
      </List>
      {loading && <div>Loading...</div>}
    </Container>
  );
};

export default Houses;
