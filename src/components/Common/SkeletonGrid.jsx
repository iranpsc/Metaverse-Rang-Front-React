import styled, { keyframes } from "styled-components";
import Container from "./Container";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const LoadingContainer = styled(Container)`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const SkeletonCard = styled.div`
  flex: 1;
  height: 280px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    #dcdcdc 25%,
    #e9e9e9 37%,
    #dcdcdc 63%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

const SkeletonGrid = ({ count = 2 }) => {
  return (
    <LoadingContainer>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </LoadingContainer>
  );
};

export default SkeletonGrid;
