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
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Set maximum width and height */
  min-width: 100vw;
  margin: 10px;
  max-width: 1350px;
  max-height: 700px;
  background-color: red;
`;
const Content = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const NotFoundMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.background};
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
