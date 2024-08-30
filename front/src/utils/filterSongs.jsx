// utils/filterSongs.js

export const filterSongs = (songs, filters) => {
  const noFiltersApplied =
    !filters.title && !filters.artist && !filters.album && !filters.genre;

  if (noFiltersApplied) {
    return songs; // Return original songs if no filters applied
  }

  return songs.filter(
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
};
