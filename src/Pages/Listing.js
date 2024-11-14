import React, { useState } from 'react';
import { Grid2, CircularProgress, Container } from '@mui/material';
import useFetchMovies from '../Hooks/useFetchMovies';
import GridItem from '../components/GridItem';
import SearchBar from '../components/SearchBar';

const Listing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading } = useFetchMovies(searchQuery);

  return (
    <Container sx={{ py: 4 }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Grid2 container spacing={2} sx={{ mt: 2 ,justifyContent:"space-between"}}>
        {movies.map((movie, index) => (
          <Grid2 item key={index} xs={12} sm={6} md={4}>
            <GridItem movie={movie} />
          </Grid2>
        ))}
      </Grid2>
      {loading && (
        <Container sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <CircularProgress />
        </Container>
      )}
    </Container>
  );
};

export default Listing;