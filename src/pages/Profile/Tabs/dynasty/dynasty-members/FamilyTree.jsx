import { FaPlus } from "react-icons/fa";

import TreeMember from "./TreeMember";
import member from "../../../../../assets/images/user.png";
import styled from "styled-components";
import Title from "../../../../../Components/Title";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";

// Container with explicit width and scroll
const Container = styled.div`
  padding: 20px 25px;
  overflow-x: auto; /* Enable horizontal scrolling */
  overflow-y: auto; /* Enable vertical scrolling */

  height: 230px;
  width: 535px;
  @media (min-width: 720px) {
    height: 400px;
    width: 360px;
  }
  @media (min-width: 740px) {
    height: 220px;
    width: 375px;
  }
  @media (min-width: 840px) {
    height: 235px;
    width: 460px;
  }
  @media (min-width: 880px) {
    height: 205px;
    width: 490px;
  }
  @media (min-width: 890px) {
    height: 260px;
    width: 502px;
  }
  @media (min-width: 900px) {
    height: 275px;
    width: 516px;
  }
  @media (min-width: 910px) {
    height: 260px;
    width: 516px;
  }
  @media (min-width: 930px) {
    height: 275px;
    width: 530px;
  }
  @media (min-width: 1024px) {
    height: 380px;
    width: 650px;
  }
  @media (min-width: 1180px) {
    height: 575px;
  }
  @media (min-width: 1280px) {
    height: 560px;
    width: 810px;
  }
  @media (min-width: 1366px) {
    height: 640px;
    width: 990px;
  }
  @media (min-width: 1500px) {
    height: 540px;
    width: 990px;
  }
  @media (min-width: 1920px) {
    height: 625px;
    width: 100%;
  }
`;

// Tree element now uses flex-basis instead of width: 100%
const Tree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: white;
  position: relative;
  min-width: fit-content; /* Ensures Tree will grow based on its content */
`;

// Head component styling
const Head = styled.div`
  img {
    border-radius: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  &:hover img {
    box-shadow: 0px 10px 25px -5px ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

// Flexbox-based family container
const Family = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  width: fit-content;

  position: relative;
  padding: 20px 0;
  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: 50%;
    width: 2px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.newColors.shades.title};
    transform: translateX(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.newColors.shades.title};
  }
`;

const Sibling = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Children = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  width: fit-content; /* Use fit-content to adjust width based on content */

  position: relative;
  padding-top: 20px;
  &::before {
    content: "";
    position: absolute;
    top: -280px;
    left: 50%;
    width: 2px;
    height: 280px;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.newColors.shades.title};
    transform: translateX(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.newColors.shades.title};
  }
`;

const Childs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Spouse = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Add = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.newColors.otherColors.menuBg};
  border: 2px dashed #454545;
  border-radius: 10px;
  cursor: pointer;
  height: 205px;
  width: 145px;
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.newColors.shades.title};
    font-weight: 400;
  }
  svg {
    color: ${({ theme }) => theme.colors.newColors.shades.title};
  }
`;

const FamilyTree = ({ members, setMode, ownerImg }) => {
  const handleAddMember = (type) => {
    setMode({ mode: 2, type });
  };

  return (
    <Container>
      <Title right title={getFieldTranslationByNames(112)} />
      <Tree>
        <Head>
          <img src={ownerImg || member} width={110} height={110} />
        </Head>
        <Family>
          <Sibling>
            {members.siblings.length < 4 && (
              <Add onClick={() => handleAddMember("siblings")}>
                <FaPlus size={32} />
                <span>{getFieldTranslationByNames(826)}</span>
              </Add>
            )}
            {members.siblings.map((sibling, i) => (
              <TreeMember
                key={i}
                item={sibling}
                hasAfter={i < members.siblings.length - 1}
              />
            ))}
          </Sibling>
          <Parent>
            {members.parent.length < 2 && (
              <Add onClick={() => handleAddMember("parent")}>
                <FaPlus size={32} />
                <span>{getFieldTranslationByNames(1396)}</span>
              </Add>
            )}
            {members.parent.map((item, i) => (
              <TreeMember
                key={i}
                item={item}
                hasAfter={i < members.parent.length - 1}
              />
            ))}
          </Parent>
        </Family>
        <Children>
          <Childs>
            {members.children.length < 4 && (
              <Add onClick={() => handleAddMember("children")}>
                <FaPlus size={32} />
                <span>{getFieldTranslationByNames(827)}</span>
              </Add>
            )}
            {members.children.map((child, i) => (
              <TreeMember
                key={i}
                item={child}
                hasAfter={i < members.children.length - 1}
              />
            ))}
          </Childs>
          <Spouse>
            {members.spouse.length < 1 && (
              <Add onClick={() => handleAddMember("spouse")}>
                <FaPlus size={32} />
                <span>{getFieldTranslationByNames(1397)}</span>
              </Add>
            )}
            {members.spouse.map((item, i) => (
              <TreeMember
                key={i}
                item={item}
                hasAfter={i < members.spouse.length - 1}
              />
            ))}
          </Spouse>
        </Children>
      </Tree>
    </Container>
  );
};

export default FamilyTree;
