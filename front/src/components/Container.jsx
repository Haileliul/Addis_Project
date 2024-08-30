import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  min-height: 100%;
  padding: 0 20px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.secondary};
`;
