import { useEffect, useRef, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import red from "../../../../assets/gif/red-color.gif";
import nopic from "../../../../assets/images/nopic.jpg";
import styled from "styled-components";
import useRequest from "../../../../services/Hooks/useRequest";

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
`;

const Time = styled.div`
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 700;
  }
`;

const Title = styled.h3`
  font-size: 13px;
  font-weight: 400;
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
    font-size: 16px;
    font-weight: 600;
  }

  img {
    width: 24px;
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
  grid-template-columns: 1fr 370px;
  gap: 20px;
  margin-top: 20px;
  height: calc(100% - 140px);
  overflow-y: auto;
  padding-bottom: 22px;
  padding-right: 15px;

  img {
    border-radius: 10px;
    width: 100%;
  }

  @media (min-width: 1180px) {
    padding-right: 0;
  }

  @media (min-width: 1400px) {
    height: calc(100% - 175px);
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

  @media (min-width: 1400px) {
    position: static;
  }
`;

const Questions = ({
  organizers,
  setFirstPage,
  footers,
  setFooters,
  setShining,
}) => {
  const [timer, setTimer] = useState(0.25 * 60);
  const [showAnswer, setShowAnswer] = useState(false);
  const [select, setSelect] = useState(false);
  const [data, setData] = useState();
  const timerInterval = useRef(null);
  const { Request, HTTP_METHOD } = useRequest();
  const main = organizers?.[0];

  useEffect(() => {
    if (select) {
      const fetchData = async () => {
        try {
          const res = await Request("challenge/answer", HTTP_METHOD.POST);
          console.log("res", res.data.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, []);

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
      setShowAnswer(true);
      setTimer(0.25 * 60);
      setTimeout(() => {
        setFirstPage(true);
      }, 1000);
    }
  }, [timer, setFirstPage]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, "۰");
    const formattedSeconds = String(seconds).padStart(2, "۰");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Request("challenge/question", HTTP_METHOD.GET);
        console.log("res", res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const question = {
    title: data?.title,
    options:
      data?.answers?.map((answer) => ({
        id: answer.id,
        title: answer.title,
        status: false,
        percent: 0,
      })) || [],
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
              <Title>زمان باقی مانده</Title>
              <span>
                {formatTime(timer)
                  .toLocaleString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              </span>
            </Time>
            <Gif>
              <Title>پاداش شما</Title>
              <div>
                <span>{data?.prize}</span>
                <img
                  loading="lazy"
                  src={red}
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
          setShowAnswer={setShowAnswer}
          setSelect={setSelect}
          question={question}
          setTimer={setTimer}
          setFirstPage={setFirstPage}
          setFooters={setFooters}
          setShining={setShining}
        />
      </Wrapper>
      <Footer data={data} footers={footers} />
    </Container>
  );
};

export default Questions;
