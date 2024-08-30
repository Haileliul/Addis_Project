import React, { useState } from "react";
import styled from "@emotion/styled";
import MediumCard from "../components/MediumCard";
import ListItem from "../components/ListItem";
import { FaMusic } from "react-icons/fa";

const DefaultContent = styled.div`
  flex: 2;
  text-align: center;
  font-size: 1.2em;
  width: 100%;
  height: 600px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Space out children evenly */
  align-items: center; /* Center children vertically */
  padding-right: 5px;
  gap: 5px; /* Space between each child */
  background-color: red;
`;

// MediumCard with optional flex growth
// const MediumCard = styled.div`
//   flex: 1; /* Allow it to take up as much space as possible */
//   margin-right: 16px; /* Optional: add some spacing */
//   /* Other styles for MediumCard */
// `;

// GenerContainer with optional flex growth
const GenerContainer = styled.div`
  flex: 5; /* Can take up more space compared to MediumCard */
  display: flex;
  flex-direction: row; /* Stack the children vertically */
  gap: 8px; /* Space between each child MediumCard */
  /* Other styles for GenerContainer */
`;

const GenerList = ["hipop", "rgay", "rap"];

const DefaultPage = () => {
  const handleEdit = () => {
    alert("Edit clicked");
  };

  const handleDelete = () => {
    alert("Delete clicked");
  };

  return (
    <DefaultContent>
      <p>This is the default page.</p>
      <TopContainer>
        <MediumCard title="Sample Song" />
        <GenerContainer>
          {/* Assuming GenerList is an array of genres */}
          {GenerList.map((gener) => (
            <MediumCard key={gener} title={gener} />
          ))}
        </GenerContainer>
      </TopContainer>

      <br />
      <div>
        <ListItem
          title="Song Title"
          description="This is a description of the song."
          prefixIcon={<FaMusic />} // Prefix icon
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DefaultContent>
  );
};
export default DefaultPage;
