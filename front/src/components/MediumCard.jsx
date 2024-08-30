import styled from "@emotion/styled";
import { theme } from "../utils/Theme"; // Assuming you have a theme file

const Card = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export default function MediumCard({ title, content, image }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
}
