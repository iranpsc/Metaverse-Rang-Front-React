// Skeleton.js
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const Skeleton = styled.div`
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    #2a2a2a 25%,
    #3a3a3a 37%,
    #2a2a2a 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "20px"};
`;