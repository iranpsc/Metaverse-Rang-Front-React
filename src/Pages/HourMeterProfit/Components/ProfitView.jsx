import { useEffect, useState, useCallback } from "react";
import Button from "./Button";
import ProfitList from "./ProfitList";
import building from "../../../Assets/images/building.png";
import education from "../../../Assets/images/courthouse.png";
import house from "../../../Assets/images/house.png";
import styled from "styled-components";
import useRequest from "../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../Services/Utility";

const Scroll = styled.div`
  padding: 30px 15px 20px;
  overflow-y: auto;
  height: calc(100% - 115px);
  @media (min-width: 1024px) {
    height: calc(100% - 170px);
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
const ProfitView = () => {
  const [buttons, setButtons] = useState([]);
  const [cards, setCards] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const karbariMapping = {
    m: {
      title: getFieldTranslationByNames(
        "hour-meter-profit",
        "residential property"
      ),
      logo: house,
      color: "#FFC700",
      background: "#ffc80021",
    },
    t: {
      title: getFieldTranslationByNames(
        "hour-meter-profit",
        "commercial property"
      ),
      logo: building,
      color: "#FF0000",
      background: "#ff000021",
    },
    a: {
      title: getFieldTranslationByNames(
        "hour-meter-profit",
        "educational property"
      ),
      logo: education,
      color: "#0066FF",
      background: "#0066ff21",
    },
  };

  const fetchData = useCallback(() => {
    if (!hasMore) return;

    Request(`hourly-profits?page=${page}`, HTTP_METHOD.GET)
      .then(({ data }) => {
        const filteredData = data.data
          .filter((item) => item.is_active)
          .map((item) => ({
            ...item,
            ...karbariMapping[item.karbari],
          }));

        setCards((prevCards) => [...prevCards, ...filteredData]);
        setPage(data.meta.current_page + 1);
        setHasMore(data.links.next !== null);

        setButtons([
          {
            id: 1,
            title: getFieldTranslationByNames(
              "hour-meter-profit",
              "commercial real estate profits"
            ),
            logo: building,
            value: parseFloat(data.additional.total_tejari_profit),
            color: "#FF0000",
          },
          {
            id: 2,
            title: getFieldTranslationByNames(
              "hour-meter-profit",
              "residential property interest"
            ),
            logo: house,
            value: parseFloat(data.additional.total_maskoni_profit),
            color: "#FFC700",
          },
          {
            id: 3,
            title: getFieldTranslationByNames(
              "hour-meter-profit",
              "educational property interest"
            ),
            logo: education,
            value: parseFloat(data.additional.total_amozeshi_profit),
            color: "#0066FF",
          },
        ]);
      })
      .catch(console.error);
  }, [page, hasMore]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      fetchData();
    }
  };

  const sumHandler = ({ color, value }) => {
    const sameColorCards = cards.filter((card) => card.color === color);
    const allValuesAreZero = sameColorCards.every((item) => item.value === 0);

    if (!allValuesAreZero) {
      setButtons((prevButtons) =>
        prevButtons.map((button) =>
          button.color === color ? { ...button, value: 0 } : button
        )
      );

      const karbari = Object.keys(karbariMapping).find(
        (key) => karbariMapping[key].color === color
      );

      Request(`hourly-profits`, HTTP_METHOD.POST, { karbari })
        .then(() => {
          setCards((prevCards) =>
            prevCards.filter((card) => card.color !== color)
          );
        })
        .catch(console.error);
    }
  };

  const handelClick = ({ color, value, id }) => {
    Request(`hourly-profits/${id}`, HTTP_METHOD.POST)
      .then(() => {
        setButtons((prevButtons) =>
          prevButtons.map((button) =>
            button.color === color
              ? { ...button, value: button.value - value }
              : button
          )
        );
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      })
      .catch(console.error);
  };

  // فیلتر کردن کارت‌هایی که is_active آنها false است
  const filteredCards = cards.filter((card) => card.is_active);

  return (
    <Scroll onScroll={handleScroll}>
      <Buttons>
        {buttons.map((button) => (
          <Button
            onClick={() => sumHandler(button)}
            key={button.id}
            {...button}
          />
        ))}
      </Buttons>
      <ProfitList cards={filteredCards} onClick={handelClick} />
    </Scroll>
  );
};

export default ProfitView;
