import styled from "@emotion/styled";
import { FaEdit, FaTrash } from "react-icons/fa"; // You can use any icon library you prefer

const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const IconPrefix = styled.div`
  margin-right: ${({ theme }) => theme.spacing.small};
  font-size: 1.5em; // Adjust size as needed
`;

const MainContent = styled.div`
  text-align: start;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

const Title = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

const IconPostfix = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em; // Adjust size as needed
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ListItem = ({ title, description, onEdit, onDelete, prefixIcon }) => {
  return (
    <ListItemWrapper>
      <IconPrefix>{prefixIcon}</IconPrefix>
      <MainContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </MainContent>
      <IconPostfix>
        <IconButton onClick={onEdit}>
          <FaEdit />
        </IconButton>
        <IconButton onClick={onDelete}>
          <FaTrash />
        </IconButton>
      </IconPostfix>
    </ListItemWrapper>
  );
};

export default ListItem;
