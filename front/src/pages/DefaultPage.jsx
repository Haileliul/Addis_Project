import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import MediumCard from "../components/MediumCard";
import GenerCard from "../components/GenerCard";
import ListItem from "../components/ListItem";
import CreateModal from "../components/CreateModal";
import UpdateModal from "../components/UpdateModal";
import { FaMusic } from "react-icons/fa";
import { fetchSongs } from "../Redux/songsSlice"; // Import the fetchSongs thunk

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
  width: 100%;
  height: 10px;
  background-color: white;
  border: none;
  margin-bottom: 10px;
`;

const ListContainer = styled.div`
  height: 250px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  padding: 10px;
`;

const genreList = ["Genre Name", "reggae", "rap", "pop"];

const DefaultPage = () => {
  const dispatch = useDispatch();
  const { songs, status } = useSelector((state) => state.songs); // Access songs and status from the Redux store

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSongs()); // Fetch songs when the component mounts
    }
  }, [status, dispatch]);

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
  };

  const filteredSongs = selectedGenre
    ? songs.filter((song) => song.genre === selectedGenre)
    : [];

  const getSongCountByGenre = (genre) => {
    return songs.filter((song) => song.genre === genre).length;
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
              onClick={() => handleGenreClick(genre)}
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
              onEdit={() => handleEdit(song)}
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
        initialData={selectedSong}
      />
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddSong}
        initialData={selectedSong}
      />
    </DefaultContent>
  );
};

export default DefaultPage;
