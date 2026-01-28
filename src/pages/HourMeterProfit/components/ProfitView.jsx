import { useEffect, useState, useCallback, useContext } from "react";
import Button from "./Button";
import ProfitList from "./ProfitList";
import building from "../../../assets/images/building.png";
import education from "../../../assets/images/courthouse.png";
import house from "../../../assets/images/house.png";
import styled from "styled-components";
import useRequest from "../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../services/Utility";
import { UserContextTypes } from "../../../services/actions/UserContextAction";

import UserProvider, {
  UserContext,
} from "../../../services/reducers/UserContext";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../services/reducers/WalletContext";

const Scroll = styled.div`
  padding: 30px 15px 20px;
  overflow-y: auto;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProfitView = () => {
  const [user, userDispatch] = useContext(UserContext);
  const [buttons, setButtons] = useState([]);
  const [cards, setCards] = useState([]);
  const { Request, HTTP_METHOD } = useRequest();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [wallet, dispatch] = useContext(WalletContext); // WalletContext access
  const [loading, setLoading] = useState(false);

  const karbariMapping = {
    m: {
      title: getFieldTranslationByNames("477"),
      logo: house,
      color: "#FFC700",
      background: "#ffc80021",
    },
    t: {
      title: getFieldTranslationByNames("475"),
      logo: building,
      color: "#FF0000",
      background: "#ff000021",
    },
    a: {
      title: getFieldTranslationByNames("476"),
      logo: education,
      color: "#0066FF",
      background: "#0066ff21",
    },
  };
  const fetchData = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);

    try {
      const { data } = await Request(
        `hourly-profits?page=${page}`,
        HTTP_METHOD.GET,
      );
      const filteredData = data.data
        .filter((item) => item.is_active)
        .map((item) => ({
          ...item,
          ...karbariMapping[item.karbari],
        }));

      setCards((prev) => [...prev, ...filteredData]);

      setHasMore(Boolean(data.links.next));
      setPage((prev) => prev + 1);

      // فقط بار اول
      setButtons((prev) =>
        prev.length
          ? prev
          : [
              {
                id: 1,
                title: getFieldTranslationByNames("28"),
                logo: building,
                value: +data.additional.total_tejari_profit,
                color: "#FF0000",
              },
              {
                id: 2,
                title: getFieldTranslationByNames("29"),
                logo: house,
                value: +data.additional.total_maskoni_profit,
                color: "#FFC700",
              },
              {
                id: 3,
                title: getFieldTranslationByNames("474"),
                logo: education,
                value: +data.additional.total_amozeshi_profit,
                color: "#0066FF",
              },
            ],
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollHeight - scrollTop <= clientHeight + 800) {
      fetchData();
    }
  };

  const sumHandler = ({ color }) => {
    const sameColorCards = cards.filter((card) => card.color === color);

    const totalValue = buttons.find((btn) => btn.color === color)?.value ?? 0;

    const cardsAreZero = sameColorCards.every((item) => item.value === 0);

    const allValuesAreZero = cardsAreZero && totalValue === 0;


    if (!allValuesAreZero) {
      const karbari = Object.entries(karbariMapping).find(
        ([, value]) => value.color === color,
      )?.[0];

      const totalValue = buttons.find((btn) => btn.color === color)?.value ?? 0;

      Request(`hourly-profits`, HTTP_METHOD.POST, { karbari })
        .then(() => {
          setButtons((prevButtons) =>
            prevButtons.map((button) =>
              button.color === color ? { ...button, value: 0 } : button,
            ),
          );

          setCards((prevCards) =>
            prevCards.filter((card) => card.color !== color),
          );
          const updatedWallet = {
            ...wallet,
            yellow:
              color === "#FFC700"
                ? (+wallet.yellow || 0) + totalValue
                : wallet.yellow,
            red:
              color === "#FF0000"
                ? (+wallet.red || 0) + totalValue
                : wallet.red,
            blue:
              color === "#0066FF"
                ? (+wallet.blue || 0) + totalValue
                : wallet.blue,
          };

          // ✅ dispatch درست
          dispatch({
            type: WalletContextTypes.ADD_WALLET,
            payload: updatedWallet,
          });
          userDispatch({
            type: UserContextTypes.UPDATE_FIELD,
            payload: {
              key: "hourly_profit_time_percentage",
              value:
                totalValue === 0
                  ? 0
                  : Math.max(
                      0,
                      (user?.hourly_profit_time_percentage ?? 0) -
                        totalValue * 100,
                    ),
            },
          });
        })
        .catch(console.error);
    }
  };
  const handelClick = ({ color, amount, id }) => {
    const numericAmount = +amount;

    Request(`hourly-profits/${id}`, HTTP_METHOD.POST)
      .then(() => {
        setButtons((prevButtons) =>
          prevButtons.map((button) =>
            button.color === color
              ? { ...button, value: button.value - numericAmount }
              : button,
          ),
        );

        setCards((prevCards) => prevCards.filter((card) => card.id !== id));

        const updatedWallet = {
          ...wallet,
          yellow:
            color === "#FFC700"
              ? (+wallet.yellow || 0) + numericAmount
              : wallet.yellow,
          red:
            color === "#FF0000"
              ? (+wallet.red || 0) + numericAmount
              : wallet.red,
          blue:
            color === "#0066FF"
              ? (+wallet.blue || 0) + numericAmount
              : wallet.blue,
        };

        dispatch({
          type: WalletContextTypes.ADD_WALLET,
          payload: updatedWallet,
        });

        userDispatch({
          type: UserContextTypes.UPDATE_FIELD,
          payload: {
            key: "hourly_profit_time_percentage",
            value: Math.max(
              0,
              (+user.hourly_profit_time_percentage || 0) - numericAmount,
            ),
          },
        });
      })
      .catch(console.error);
  };

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
      <ProfitList cards={cards} onClick={handelClick} />
    </Scroll>
  );
};

export default ProfitView;
