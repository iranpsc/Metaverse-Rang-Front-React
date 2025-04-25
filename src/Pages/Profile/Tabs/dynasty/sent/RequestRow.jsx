import { LuEye } from "react-icons/lu";
import RequestDetails from "./RequestDetails";
import { convertToPersian, getFieldTranslationByNames } from "../../../../../Services/Utility";
import gift from "../../../../../assets/images/satisfy.png";
import pscGif from "../../../../../assets/gif/psc.gif";
import styled from "styled-components";
import { useState } from "react";
import useRequestDetails from "../../../../../hooks/useRequestDetails";

const TableRow = styled.tr`
  background-color: transparent;
`;

const TableCell = styled.td`
  padding: 15px 20px;
  border-bottom: 1px solid #454545;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;

const Code = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const Date = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const Subject = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const View = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s linear;
  }
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Status = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: fit-content;
  font-size: 16px;
  border-radius: 0.25rem;
  font-weight: 400;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 500;
  }
`;

const RequestRow = ({
  code,
  date,
  time,
  name,
  status,
  member,
  gif,
  psc,
  id,
  type,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { data, loading, fetchRequestDetails } = useRequestDetails(type);

  const handleClick = async () => {
    try {
      await fetchRequestDetails(id);
      setShowDetails(true);
    } catch (error) {
      // Handle error (e.g., show toast notification)
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <div>
            <Code>{code}</Code>
          </div>
        </TableCell>
        <TableCell>
          <div>
            <Date>
              {date} | {time}
            </Date>
          </div>
        </TableCell>
        <TableCell>
          <Status>{member}</Status>
        </TableCell>
        <TableCell>
          <Title
            style={{
              color: `${
                status === "confirmed"
                  ? "#18C08F"
                  : status === "pending"
                  ? "#FFC700"
                  : "#FF0000"
              }`,
            }}
          >
            {status === "confirmed"
              ? getFieldTranslationByNames(854)
              : status === "pending"
              ? getFieldTranslationByNames(852)
              : getFieldTranslationByNames(853)}
          </Title>
        </TableCell>
        <TableCell>
          <Subject>
            <Div>
              <h3>{convertToPersian(gif)}</h3>
              <Image
                width={300}
                height={300}
                alt="doctor"
                loading="lazy"
                src={gift}
              />
            </Div>
            <Div>
              <h3>{convertToPersian(psc)}</h3>
              <Image
                width={300}
                height={300}
                alt="doctor"
                loading="lazy"
                src={pscGif}
              />
            </Div>
          </Subject>
        </TableCell>
        <TableCell>
          <View onClick={handleClick}>
            <LuEye size={20} />
          </View>
        </TableCell>
      </TableRow>
      {showDetails && !loading && (
        <RequestDetails
          status={status}
          date={date}
          time={time}
          code={code}
          gif={gif}
          psc={psc}
          data={data}
          setShowDetails={setShowDetails}
          type={type}
        />
      )}
    </>
  );
};

export default RequestRow;
