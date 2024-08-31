import styled from "@emotion/styled";
import { theme } from "../utils/Theme"; // Assuming you have a theme file

const Card = styled.div`
  width: 100px; /* Adjusted to provide space for the content */
  height: 50px; /* Adjusted to provide space for the content */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer; /* Adds pointer cursor on hover */
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.secondary}; /* Change this to your desired hover color */
    color: white; /* Optionally, change text color on hover */
  }
`;

const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};

  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const NumberValue = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.small};
  right: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  y};
`;

export default function GenerCard({ name, numberValue, onClick }) {
  return (
    <Card onClick={() => onClick(name)}>
      <NumberValue>{numberValue}</NumberValue>
      <Name>{name}</Name>
    </Card>
  );
}
