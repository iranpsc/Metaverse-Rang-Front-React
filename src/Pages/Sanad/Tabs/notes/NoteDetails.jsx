import { createContext, useState } from "react";

import NoteCard from "./NoteCard";
import NoteMessages from "./NoteMessages";

import styled from "styled-components";
import Title from "../../../../Components/Title";

const Container = styled.div`
  padding: 20px 0;
  width: 90%;
  height: 80%;
  position: relative;
  border-radius: 10px;
  background-color: #000000;
  padding: 20px;
  z-index: 9999;
  @media (min-width: 1366px) {
    width: 70%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 12px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #ff000021;
    color: #ff0000;
  }
`;

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;

const Div = styled.div`
  height: 272px;
  overflow-y: auto;

  padding-right: 15px;
  @media (min-width: 720px) {
    height: 408px;
  }
  @media (min-width: 740px) {
    height: 260px;
  }
  @media (min-width: 840px) {
    height: 286px;
  }
  @media (min-width: 880px) {
    height: 250px;
  }
  @media (min-width: 890px) {
    height: 308px;
  }
  @media (min-width: 900px) {
    height: 307px;
  }
  @media (min-width: 930px) {
    height: 320px;
  }
  @media (min-width: 1024px) {
    height: 460px;
  }
  @media (min-width: 1180px) {
    height: 629px;
  }
  @media (min-width: 1280px) {
    height: 629px;
  }
  @media (min-width: 1366px) {
    height: 795px;
  }
  @media (min-width: 1500px) {
    height: 585px;
  }
  @media (min-width: 1920px) {
    height: 710px;
  }
`;
export const EditContext = createContext();
const NoteDetails = ({
  setShowDetails,
  status,
  code,
  title,
  id,
  onRemove,
  date,
  name,
  time,
  publish_date,
  description,
  files,
  member,
  domain,
  subdomain,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      <Back>
        <Container>
          <Header>
            <Title title="اطلاعات یادداشت" />
            <div onClick={() => setShowDetails(false)}>X</div>
          </Header>
          <Div>
            <NoteCard
              status={status}
              date={date}
              time={time}
              code={code}
              onRemove={onRemove}
              name={name}
              title={title}
              description={description}
              publish_date={publish_date}
              member={member}
              domain={domain}
              subdomain={subdomain}
            />
            <NoteMessages
              member={member}
              description={description}
              files={files}
              id={id}
            />
          </Div>
        </Container>
      </Back>
    </EditContext.Provider>
  );
};

export default NoteDetails;
