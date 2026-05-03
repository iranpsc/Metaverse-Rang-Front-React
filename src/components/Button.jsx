import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 10px;
  white-space: nowrap;
  background-color: ${(props) =>
    props.color
      ? props.disabled === "pending"
        ? props.color  // همان رنگ اصلی، فقط مات میشه
        : props.disabled
          ? `${props.color}80`
          : props.color
      : props.grayTheme
        ? props.theme.colors.newColors.otherColors.garyBtn
        : props.disabled === "pending"
          ? props.theme.colors.primary  // رنگ اصلی، فقط مات میشه
          : props.disabled
            ? `${props.theme.colors.primary}80`
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
  font-weight: 500;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) =>
    props.disabled === "pending"
      ? props.theme.colors.newColors.primaryText
      : props.grayTheme
        ? props.theme.colors.newColors.otherColors.grayBtnText
        : props.theme.colors.newColors.primaryText};
  color: ${(props) => (props.textColor ? props.textColor : "")};
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: ${(props) => (props.disabled === "pending" ? "0.6" : props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  
  @media (max-width: 840px) {
    width: ${(props) => (props.row ? "55px" : props.full && "100%")};
    height: ${(props) => props.row && "35px"};
    font-size: ${(props) => props.row && "14px"};
  }

  @media (min-width: 998px) {
    height: ${(props) => (props.large ? "40px" : "50px")};
  }
`;

// اسپینر دایره‌ای
const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Button = ({
  label,
  onclick,
  onClick,
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
}) => {
  const handleClick = onClick || onclick;

  return (
    <ButtonElement
      full={full}
      large={large}
      edit={edit}
      row={row}
      color={color}
      onClick={disabled ? undefined : handleClick}
      disabled={disabled}
      fit={fit}
      textColor={textColor}
      grayTheme={grayTheme}
      style={style}
    >
      {label}
      {disabled === "pending" && <Spinner />}
    </ButtonElement>
  );
};

export default Button;