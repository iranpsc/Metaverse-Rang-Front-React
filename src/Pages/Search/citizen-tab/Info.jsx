import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 14px;
      font-weight: 500;
      color: #a0a0ab;
    }
    p {
      color: #dedee9;
      font-size: 16px;
    }
  }
`;
const Info = ({ user }) => {
  const items = [
    { id: 1, title: "سطح", value: user?.level },
    { id: 2, title: "پیروان", value: user?.followers },
    { id: 3, title: "اتحاد", value: "-" },
  ];
  return (
    <Container>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </Container>
  );
};

export default Info;
