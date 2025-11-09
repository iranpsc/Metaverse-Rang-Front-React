import styled from "styled-components";
import { useLanguage } from "../services/reducers/LanguageContext";
import { useRef, useEffect, useState } from "react";

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
  height: 48px !important;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-left: ${(props) => (props.isPersian ? "1px solid #454545" : "none")};
  border-right: ${(props) => (!props.isPersian ? "1px solid #454545" : "none")};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 10px;
  height: 100%;
  @media (min-width: 1024px) and (min-height: 600px) {
    svg {
      font-size: 26px !important;
    }
  }
  svg {
    font-size: 20px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  line-height: ${(props) => props.long && "20px"};
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.long ? "14px" : "16px")};
  }
`;

const Value = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  line-height: ${(props) => props.smallValue && "20px"};
  text-transform: uppercase;
  white-space: nowrap;
  overflow-x: auto; 
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.smallValue ? "14px" : "16px")};
  }
  @media (min-width: 1400px) {
    font-size: ${(props) => (props.very_long ? "15px" : "16px")};
  }

  svg {
    margin-left: 5px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const ValueScroll = styled.span`
  display: inline-block;
  padding-left: 10px;

  ${(props) =>
    props.animate &&
    `
    animation: scrollText 12s linear infinite;
  `}

  @keyframes scrollText {
    0% { transform: translateX(0); }
    100% { transform: translateX(+50%); }
  }
`;

const TextValueIcon = ({
  icon,
  title,
  value,
  valueIcon,
  long,
  smallValue,
  very_long,
}) => {
  const isPersian = useLanguage();

  const valueRef = useRef(null);
  const textRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const box = valueRef.current;
    const text = textRef.current;

    if (!box || !text) return;

    if (text.scrollWidth > box.clientWidth) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [value]);

  const stopAnimation = () => setAnimate(false);

  return (
    <Item>
      <InfoIcon isPersian={isPersian}>
        {icon}
        <Title long={long}>{title}</Title>
      </InfoIcon>

      <Value
        ref={valueRef}
        very_long={very_long}
        smallValue={smallValue}
        onScroll={stopAnimation}
      >
        <ValueScroll ref={textRef} animate={animate}>
          {value}
        </ValueScroll>
        {valueIcon && valueIcon}
      </Value>
    </Item>
  );
};

export default TextValueIcon;
