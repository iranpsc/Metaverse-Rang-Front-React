import styled from "styled-components";
import UserImg from "../../../../../Assets/images/user.png";
export default function Member({ Top, Left ,MemberImg,Name}) {
  const Container = styled.div`
    width:72px;
    aspect-ratio: 1/1;
    position: absolute;
    top: ${Top};
    left: ${Left};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const BorderImg = styled.div`
    border-radius: 100%;
    border: 1px solid #777;
    padding: 5px;
    aspect-ratio: 1/1;
  `;
  const ContainerName = styled.div`
    width: 70px;
    height:23px;
    border: solid 1px #777;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background: white;
  `;
  const ImgMember = styled.img`
    width: 100%;
    border-radius: 100%;
  `;

  return (
    <Container>
      <BorderImg>
        <ImgMember src={UserImg}/>
      </BorderImg>
    {Name&& <ContainerName>{Name}</ContainerName>}
    </Container>
  );
}
