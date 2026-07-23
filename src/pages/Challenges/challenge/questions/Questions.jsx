import { useEffect, useRef, useState, useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import psc from "../../../../assets/gif/psc.gif";
import nopic from "../../../../assets/images/nopic.jpg";
import styled from "styled-components";
import useRequest from "../../../../services/Hooks/useRequest";
import {
  convertToPersian,
  formatTime,
  getTranslation,
} from "../../../../services/Utility";
import {
  WalletContext,
  WalletContextTypes,
} from "../../../../services/reducers/WalletContext";
const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

const Timer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.newColors.otherColors.menuBg};
  padding: 5px 15px;
  color: ${({ theme }) => theme.colors.newColors.shades.title};
  border-radius: 5px;
  @media (max-width: 1280px) {
    display: flex;
  }
`;

const Time = styled.div`
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 700;
  }
`;

const Gif = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  span {
    color: #949494;
  }

  img {
    width: 15px;
  }
  @media (max-width: 1280px) {
    span {
      font-size: 10px;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
`;

const Wrapper = styled.div`
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 1fr 200px;
  gap: 20px;
  margin-top: 20px;
  height: calc(100% - 100px);
  overflow-y: auto;
  padding: 0 10px;

  img {
    border-radius: 10px;
    width: 100%;
  }

  @media (min-width: 1180px) {
    padding-right: 0;
  }

  @media (min-width: 998px) {
    height: calc(100% - 130px);
  }
  @media (min-width: 1280px) {
    height: calc(100% - 150px);
    padding-right: 15px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1920px) {
    padding-right: 15px;
  }
`;

const Div = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 0px;
  min-width: 190px;

  @media (max-width: 1280px) {
    p {
      font-size: 13px;
      font-weight: 400;
    }
    span {
      font-size: 16px;
    }
  }
  @media (min-width: 1280px) {
    position: static;
  }
`;

const Questions = ({ organizers, setFirstPage, setFooters, setShining,questionTime,answerTime }) => {
  const [timer, setTimer] = useState(questionTime);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [answer, setAnswer] = useState();
  const [data, setData] = useState();
  const [wallet, dispatch] = useContext(WalletContext); // WalletContext access
  const timerInterval = useRef(null);
  const { Request, HTTP_METHOD } = useRequest();
  const main = organizers?.[0];

  const handleSelectAnswer = (questionId, answerId) => {
    if (selectedAnswerId) return;

    setSelectedAnswerId(answerId);

    const submitAnswer = async () => {
      try {
        const res = await Request("challenge/answer", HTTP_METHOD.POST, {
          question_id: questionId,
          answer_id: answerId,
        });

        setAnswer(res.data.data);

        const selectedAnswer = res.data.data.answers.find(
          (item) => item.id === answerId,
        );

        if (selectedAnswer?.is_correct) {
          const updatedWallet = {
            ...wallet,
            psc: +wallet.psc + data.prize,
          };

          dispatch({
            type: WalletContextTypes.ADD_WALLET,
            payload: updatedWallet,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    submitAnswer();
  };
  useEffect(() => {
    if (!answer || !selectedAnswerId) return;

    const selectedResult = answer.answers?.find(
      (item) => item.id === selectedAnswerId,
    );
    const isCorrect = !!selectedResult?.is_correct;

    setShowAnswer(true);
    setFooters((prevFooters) => [
      {
        ...prevFooters[0],
        count: prevFooters[0].count + (isCorrect ? 1 : 0),
      },
      {
        ...prevFooters[1],
        count: prevFooters[1].count + (isCorrect ? 0 : 1),
      },
      prevFooters[2],
      prevFooters[3],
    ]);
    setShining(isCorrect ? "five" : "six");
    setTimer(answerTime);

    const returnTimer = setTimeout(() => {
      setFirstPage(true);
    }, 14000);

    return () => clearTimeout(returnTimer);
  }, [answer, selectedAnswerId, setFirstPage, setFooters, setShining]);

  const handleTimer = () => {
    setTimer((prevTimer) => {
      if (prevTimer > 0) {
        return prevTimer - 1;
      }

      clearInterval(timerInterval.current);
      return 0;
    });
  };

  useEffect(() => {
    timerInterval.current = setInterval(handleTimer, 1000);

    return () => clearInterval(timerInterval.current);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      //setShowAnswer(true);
      //setTimer(0.25 * 60);
      setTimeout(() => {
        setFirstPage(true);
      }, 1000);
    }
  }, [timer, setFirstPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Request("challenge/question", HTTP_METHOD.GET);
        setData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const question = {
    title: data?.title,
    questionID: data?.id,
    options:
      data?.answers?.map((item) => {
        const result = answer?.answers?.find((a) => a.id === item.id);

        return {
          id: item.id,
          title: item.title,
          status: !!result?.is_correct,
          percent: result?.vote_percentage ?? 0,
        };
      }) || [],
  };

  return (
    <Container>
      <Wrapper>
        <Div>
          {main?.video_url ? (
            <Video src={main.video_url} autoPlay muted loop playsInline />
          ) : (
            <img loading="lazy" src={main?.image_url || nopic} alt="" />
          )}
          <Timer>
            <Time>
              <p>{getTranslation(1473)}</p>
              <span>{convertToPersian(formatTime(timer))}</span>
            </Time>
            <Gif>
              <p>{getTranslation(1474)}</p>
              <div>
                <span>{convertToPersian(data?.prize)}</span>
                <img
                  loading="lazy"
                  src={psc}
                  alt="gif"
                  width={26}
                  height={26}
                />
              </div>
            </Gif>
          </Timer>
        </Div>
        <Content
          showAnswer={showAnswer}
          selectedAnswerId={selectedAnswerId}
          onSelectAnswer={handleSelectAnswer}
          question={question}
        />
      </Wrapper>
      <Footer data={data} />
    </Container>
  );
};

export default Questions;
