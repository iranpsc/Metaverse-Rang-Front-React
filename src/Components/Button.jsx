import styled from "styled-components";
import loaderGif from "../Assets/gif/ajax-loader.gif";

const ButtonElement = styled.button`
  border-radius: 10px;
  background-color: ${(props) =>
    props.color
      ? props.color
      : props.grayTheme
      ? props.theme.colors.newColors.otherColors.garyBtn
      : props.disabled === "pending"
      ? "#3B3B3B"
      : props.theme.colors.primary};
  border: none;
  padding: ${(props) => (props.large ? "0 20px" : "10px 22px")};
  width: ${(props) =>
    props.fit
      ? "fit-content"
      : props.edit
      ? "125px"
      : props.large
      ? "fit-content"
      : props.full
      ? "100%"
      : "fit-content"};
  height: 45px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) =>
    props.disabled === "pending"
      ? "#949494"
      : props.grayTheme
      ? props.theme.colors.newColors.otherColors.grayBtnText
      : props.theme.colors.newColors.primaryText};
  color: ${(props) => (props.textColor ? props.textColor : "")};
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 840px) {
    width: ${(props) => (props.row ? "55px" : props.full && "100%")};
    height: ${(props) => props.row && "35px"};
    font-size: ${(props) => props.row && "14px"};
  }

  @media (min-width: 998px) {
    height: 50px;
  }
  img {
    width: 25px;
    height: 25px;
    margin: 0 3px;
  }
`;

const Button = ({
  label,
  onClick, // keep only onClick, remove onclick
  row,
  color,
  edit,
  large,
  full,
  disabled,
  fit,
  textColor,
  grayTheme,
  style,
  onclick,
}) => {
  return (
    <ButtonElement
      full={full}
      large={large}
      edit={edit}
      row={row}
      color={color}
      onClick={onClick ? onClick : onclick} // keep only one onClick prop
      disabled={disabled}
      fit={fit}
      textColor={textColor}
      grayTheme={grayTheme}
      style={style}
    >
      {label}{" "}
      {disabled === "pending" && <img src={loaderGif} alt="Loading..." />}
    </ButtonElement>
  );
};

export default Button;
