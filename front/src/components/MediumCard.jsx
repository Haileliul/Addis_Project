import styled from "@emotion/styled";
import { theme } from "../utils/Theme"; // Assuming you have a theme file
import { FaPlus } from "react-icons/fa"; // Assuming you are using react-icons for the plus icon

const Card = styled.div`
  width: 70px; /* Adjusted width */
  height: 50px; /* Adjusted height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Makes the box clickable */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.hoverBackground}; /* Assuming you have a hover color */
  }
`;

const Icon = styled(FaPlus)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xsmall};
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 10px;
`;

export default function MediumCard({ onClick }) {
  return (
    <Card onClick={onClick}>
      <Icon />
      <Text>Create Song</Text>
    </Card>
  );
}
