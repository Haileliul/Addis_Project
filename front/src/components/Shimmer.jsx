import styled, { keyframes } from "@emotion/styled";

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const ShimmerEffect = styled.div`
  width: 100%;
  height: 50px;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #e7e7e7 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;
