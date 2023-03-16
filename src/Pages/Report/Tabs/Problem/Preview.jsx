import styled from "styled-components";
import BackIcon from "../../../../Assets/images/back.png";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  gap: 20px;
`;
const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const Text = styled.p`
  color: #666;
  font-size: 14px;
`;
const Icon = styled.img`
  width: 50px;
  rotate: 360deg;
  transform: rotateY(185deg);
`;
const TitleReport = styled.p`
  display: flex;
  width: 100%;
  text-align: right;
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  justify-content: flex-end;
`;
const Message = styled.p`
  width: 100%;
  justify-content: flex-end;
  word-wrap: break-word;
  color: #666;
  font-size: 14px;
`;
export default function Preview() {
  return (
    <Container>
      <ContainerHeader>
        <Icon src={BackIcon} />
        <Text>RE-100</Text>
        <Text>1401/01/01</Text>
        <Text>19:50:24</Text>
        <Text>برطرف شده</Text>
      </ContainerHeader>
      <TitleReport>عنوان</TitleReport>
      <Message>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum quis. Ratione laudantium quas necessitatibus! Facilis consequuntur tempora ullam repellat, dolor facere, culpa beatae nisi, reprehenderit error dolores. Ex, rerum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum quis. Ratione laudantium quas necessitatibus! Facilis consequuntur tempora ullam repellat, dolor facere, culpa beatae nisi, reprehenderit error dolores. Ex, rerum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum quis. Ratione laudantium quas necessitatibus! Facilis consequuntur tempora ullam repellat, dolor facere, culpa beatae nisi, reprehenderit error dolores. Ex, rerum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum quis. Ratione laudantium quas necessitatibus! Facilis consequuntur tempora ullam repellat, dolor facere, culpa beatae nisi, reprehenderit error dolores. Ex, rerum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum quis. Ratione laudantium quas necessitatibus! Facilis consequuntur tempora ullam repellat, dolor facere, culpa beatae nisi, reprehenderit error dolores. Ex, rerum?</Message>
    </Container>
  );
}
