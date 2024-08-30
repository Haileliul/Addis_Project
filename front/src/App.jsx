import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Sidebar from "./components/Sidebar";
import DefaultPage from "./pages/DefaultPage";

import { theme } from "./utils/Theme";

const PageLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow-y: auto;

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
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

const songsData = [
  { title: "Song A", artist: "Artist 1", album: "Album X", genre: "Rock" },
  { title: "Song B", artist: "Artist 2", album: "Album Y", genre: "Pop" },
  { title: "Song C", artist: "Artist 1", album: "Album Z", genre: "Jazz" },
  // Add more songs as needed
];

function App() {
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const handleFilterChange = (filters) => {
    // Check if any filter fields are touched
    const noFiltersApplied =
      !filters.title && !filters.artist && !filters.album && !filters.genre;

    if (noFiltersApplied) {
      setIsFilterApplied(false);
      return;
    }

    setIsFilterApplied(true);

    const filtered = songsData.filter(
      (song) =>
        (!filters.title ||
          song.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (!filters.artist ||
          song.artist.toLowerCase().includes(filters.artist.toLowerCase())) &&
        (!filters.album ||
          song.album.toLowerCase().includes(filters.album.toLowerCase())) &&
        (!filters.genre ||
          song.genre.toLowerCase().includes(filters.genre.toLowerCase()))
    );

    setFilteredSongs(filtered);
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
              <div>
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
              </div>
            ) : (
              <NotFoundMessage>Not Found</NotFoundMessage>
            )}
          </Content>
        </Container>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
