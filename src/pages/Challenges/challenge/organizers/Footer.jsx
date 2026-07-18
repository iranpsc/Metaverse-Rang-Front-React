import { useEffect, useState } from "react";
import { useTheme } from "../../../../services/reducers/ThemeContext";
import ConfettiExplosion from "react-confetti-explosion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { convertToPersian } from "../../../../services/Utility";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 15px;
  justify-content: space-between;

  gap: 10px;
  div {
    flex-grow: 1;
    background-color: ${({ theme }) =>
      theme.colors.newColors.otherColors.menuBg};
    border-radius: 4px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    span {
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.newColors.otherColors.headerMenu};
    }
  }
`;

const Footer = ({ footers, shining, firstPage }) => {
  const [bright, setBright] = useState("one");
  const { theme } = useTheme();

  useEffect(() => {
    if (shining === "five") {
      setBright("two");
    } else if (shining === "six") {
      setBright("three");
    }
  }, [shining]);

  useEffect(() => {
    if (!firstPage) {
      setBright("one");
    }
  }, [firstPage]);

  return (
    <Container>
      {footers.map((item) => (
        <div key={item.id} data-tooltip-id={item.slug}>
          <span>{convertToPersian(item.count)}</span>
          <img src={item.icon} width={26} height={26} />
          <ReactTooltip
            style={{
              borderRadius: "10px",
              width: "100px",
              paddingBottom: "9.5px",
              textAlign: "center",
              zIndex: "999",
              color: theme === "light" ? "#1A1A18" : "#FCFCFC",
            }}
            id={item.slug}
            place="top"
            content={item.slug}
          />
          {bright === "two" && (
            <ConfettiExplosion
              style={{
                position: "absolute",
                top: "20px",
                right: "30px",
                opacity: "0%",
              }}
              particleSize={5}
              width={400}
              zIndex={9999}
              height={"100vh"}
              colors={["#18C08F"]}
            />
          )}
          {bright === "three" && (
            <ConfettiExplosion
              style={{
                position: "absolute",
                top: "20px",
                right: "175px",
                opacity: "0%",
              }}
              particleSize={5}
              width={400}
              height={"100vh"}
              zIndex={9999}
              colors={["#C30000"]}
            />
          )}
        </div>
      ))}
    </Container>
  );
};

export default Footer;
