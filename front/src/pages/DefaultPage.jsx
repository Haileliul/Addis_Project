import React, { useState } from "react";
import styled from "@emotion/styled";
import MediumCard from "../components/MediumCard";
import GenerCard from "../components/GenerCard";
import ListItem from "../components/ListItem";
import CreateModal from "../components/CreateModal";
import UpdateModal from "../components/UpdateModal";
import { FaMusic } from "react-icons/fa";

const DefaultContent = styled.div`
  flex: 2;
  text-align: center;
  font-size: 1.2em;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 8px;
`;

const GenerContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

const HorizontalDivider = styled.hr`
  width: 100%; /* Fits the width of the container */
  height: 10px; /* Thickness of the divider */
  background-color: white; /* Background color */
  border: none; /* Removes default border styles */
  margin-bottom: 10px; /* Adds spacing below the divider */
`;

const ListContainer = styled.div`
  height: 250px; /* Fixed height */
  overflow-y: auto; /* Enables vertical scrolling if content overflows */
  background-color: ${({ theme }) =>
    theme.colors.light}; /* Optional background color */
  border-radius: 8px; /* Optional border radius */
  padding: 10px; /* Optional padding */
`;

const songsData = [
  { title: "Song A", artist: "Artist 1", album: "Album X", genre: "hiphop" },
  { title: "Song B", artist: "Artist 2", album: "Album Y", genre: "reggae" },
  { title: "Song C", artist: "Artist 1", album: "Album Z", genre: "rap" },
  { title: "Song D", artist: "Artist 3", album: "Album W", genre: "pop" },
  // Add more songs as needed
];

const genreList = ["hiphop", "reggae", "rap", "pop"];

const DefaultPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null); // New state

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const handleEdit = (song) => {
    setSelectedSong(song);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = () => {
    alert("Delete clicked");
  };

  const handleAddSong = (newSong) => {
    console.log("New song added:", newSong);
    setIsModalOpen(false);
    setSelectedSong(null);
    // Update songsData state or handle the song update here
  };

  const filteredSongs = selectedGenre
    ? songsData.filter((song) => song.genre === selectedGenre)
    : [];

  const getSongCountByGenre = (genre) => {
    return songsData.filter((song) => song.genre === genre).length;
  };

  return (
    <DefaultContent>
      <p>This is the default page.</p>
      <TopContainer>
        <MediumCard onClick={() => setIsModalOpen(true)} />
        <GenerContainer>
          {genreList.map((genre) => (
            <GenerCard
              key={genre}
              numberValue={getSongCountByGenre(genre)}
              name={genre}
              onClick={handleGenreClick}
            />
          ))}
        </GenerContainer>
      </TopContainer>
      <HorizontalDivider />
      <ListContainer>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <ListItem
              key={index}
              title={song.title}
              description={`Artist: ${song.artist}, Album: ${song.album}`}
              prefixIcon={<FaMusic />}
              onEdit={() => handleEdit(song)} // Pass song to handleEdit
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No songs found in this genre.</p>
        )}
      </ListContainer>
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onSubmit={handleAddSong}
        initialData={selectedSong} // Pass selected song to modal
      />
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddSong}
        initialData={selectedSong} // Pass selected song to modal
      />
    </DefaultContent>
  );
};

export default DefaultPage;
