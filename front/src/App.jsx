import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./pages/DefaultPage";
import backgroundImage from "./assets/background.png";
import { filterSongs } from "./utils/filterSongs";
import { theme } from "./utils/Theme";
import { fetchSongs } from "../src/Redux/songsSlice";

const PageLayout = styled.div`
  width: 100vw;
  height: 100vh; /* Ensure it covers the full height of the viewport */
  background-image: url(${backgroundImage});
  background-size: cover; /* Ensure the image covers the entire area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden; /* Prevents scrolling */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow-y: hidden; /* Prevents content overflow */
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

const SongListWrapper = styled.div`
  height: 500px; /* Restricts height to parent (Content) height */
  overflow-y: auto; /* Allows scrolling if content overflows */
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SongItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & strong {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 767px) {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    padding: ${({ theme }) => theme.spacing.small};
  }
`;

const NotFoundMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.text};
`;

// const songsData = [
//   { title: "Song A", artist: "Artist 1", album: "Album X", genre: "Rock" },
//   { title: "Song B", artist: "Artist 2", album: "Album Y", genre: "Pop" },
//   { title: "Song C", artist: "Artist 1", album: "Album Z", genre: "Jazz" },
//   { title: "Song A", artist: "Artist 1", album: "Album X", genre: "Rock" },
//   { title: "Song B", artist: "Artist 2", album: "Album Y", genre: "Pop" },
//   { title: "Song C", artist: "Artist 1", album: "Album Z", genre: "Jazz" },
//   // Add more songs as needed
// ];
const App = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const songStatus = useSelector((state) => state.songs.status);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    if (songStatus === "idle") {
      dispatch(fetchSongs());
    }
  }, [songStatus, dispatch]);

  const handleFilterChange = (filters) => {
    const filtered = filterSongs(songs, filters);
    setFilteredSongs(filtered);
    setIsFilterApplied(filtered.length > 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Container>
          <Sidebar onFilterChange={handleFilterChange} />
          <Content>
            {!isFilterApplied ? (
              <div>
                <DefaultPage />
              </div>
            ) : filteredSongs.length > 0 ? (
              <SongListWrapper>
                <h1>Song List</h1>
                <SongList>
                  {filteredSongs.map((song, index) => (
                    <SongItem key={index}>
                      <strong>Title:</strong> {song.title} <br />
                      <strong>Artist:</strong> {song.artist} <br />
                      <strong>Album:</strong> {song.album} <br />
                      <strong>Genre:</strong> {song.genre}
                    </SongItem>
                  ))}
                </SongList>
              </SongListWrapper>
            ) : (
              <NotFoundMessage>Not Found</NotFoundMessage>
            )}
          </Content>
        </Container>
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
