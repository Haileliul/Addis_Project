// Sidebar.jsx
import React, { useState } from "react";
import styled from "@emotion/styled";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const FilterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <SidebarContainer>
      <Title>Song Filters</Title>

      {/* Title Filter */}
      <FilterGroup>
        <FilterLabel htmlFor="title">Title</FilterLabel>
        <FilterInput
          id="title"
          name="title"
          type="text"
          value={filters.title}
          onChange={handleChange}
          placeholder="Filter by Title"
        />
      </FilterGroup>

      {/* Artist Filter */}
      <FilterGroup>
        <FilterLabel htmlFor="artist">Artist</FilterLabel>
        <FilterInput
          id="artist"
          name="artist"
          type="text"
          value={filters.artist}
          onChange={handleChange}
          placeholder="Filter by Artist"
        />
      </FilterGroup>

      {/* Album Filter */}
      <FilterGroup>
        <FilterLabel htmlFor="album">Album</FilterLabel>
        <FilterInput
          id="album"
          name="album"
          type="text"
          value={filters.album}
          onChange={handleChange}
          placeholder="Filter by Album"
        />
      </FilterGroup>

      {/* Genre Filter */}
      <FilterGroup>
        <FilterLabel htmlFor="genre">Genre</FilterLabel>
        <FilterInput
          id="genre"
          name="genre"
          type="text"
          value={filters.genre}
          onChange={handleChange}
          placeholder="Filter by Genre"
        />
      </FilterGroup>
    </SidebarContainer>
  );
};

export default Sidebar;
