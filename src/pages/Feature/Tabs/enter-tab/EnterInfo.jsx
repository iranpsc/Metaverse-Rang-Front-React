import { useEffect, useState } from "react";

import Info from "./Info";
import Slider from "./Slider";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px 10px;
  overflow-y: auto;

  gap: 30px;
  display: grid;

  @media (min-width: 1500px) {
    padding-right: 0px;
    grid-template-columns: 2fr 3fr;
  }
`;

const EnterInfo = ({ setEdit, data, edit, payed, setPayed, isOwner }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1369);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1369);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <>
          <Info
            isOwner={isOwner}
            data={data}
            edit={edit}
            setEdit={setEdit}
            payed={payed}
            setPayed={setPayed}
            isMobile={isMobile}
          />
          <Slider data={data} />
        </>
      ) : (
        <>
          <Slider data={data} />
          <Info
            isOwner={isOwner}
            data={data}
            edit={edit}
            setEdit={setEdit}
            payed={payed}
            setPayed={setPayed}
          />
        </>
      )}
    </Container>
  );
};

export default EnterInfo;
