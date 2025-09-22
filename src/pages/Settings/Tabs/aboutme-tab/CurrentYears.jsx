import styled from "styled-components";
import { useState } from "react";
import { getFieldTranslationByNames,convertToPersian} from "../../../../services/Utility";
const Container = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border-radius: 8px;
  margin-top: 20px;
`;

const DropdownButton = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  border: 1px solid ${(props) => props.theme.colors.newColors.shades[80]};
  padding: 10px;
  width: 150px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const Arrow = styled.span`
  border: solid ${(props) => props.theme.colors.newColors.shades.title};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-left: 10px;
`;

const DropdownMenu = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  position: absolute;
  top: 55px;
  width: 170px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;

`;

const DropdownItem = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.newColors.shades[50]};

  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`;

const Content = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  line-height: 1.6;
`;

const yearContent = {
  "۱۴۰۳":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1403",

    "1403":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1403",

  "۱۴۰۲":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1402",

    "1402":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1402",
    
  "۱۴۰۱":
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1401",
    
  "1401":
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ... سال 1401",
};

const CurrentYears = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(convertToPersian("1403"));
  const toggleDropdown = () => setIsOpen(!isOpen);




  const selectYear = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <Container>
      <Div>
        <Label>{getFieldTranslationByNames("802")}</Label>
        <div>
          <DropdownButton onClick={toggleDropdown}>
            <span>{selectedYear}</span>
            <Arrow
              style={{
                transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
              }}
            />
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem  onClick={() => selectYear(convertToPersian("1403"))}>
                {getFieldTranslationByNames("803")} {convertToPersian("1403")}
              </DropdownItem>
              <DropdownItem onClick={() => selectYear(convertToPersian("1402"))}>
                {getFieldTranslationByNames("803")} {convertToPersian("1402")}
              </DropdownItem>
              <DropdownItem onClick={() => selectYear(convertToPersian("1401"))}>
                {getFieldTranslationByNames("803")} {convertToPersian("1401")}
              </DropdownItem>
            </DropdownMenu>
          )}
        </div>
      </Div>
      <Content>
        <Label>{getFieldTranslationByNames("804")}</Label>
        {yearContent[selectedYear]}
      </Content>
    </Container>
  );
};

export default CurrentYears;
