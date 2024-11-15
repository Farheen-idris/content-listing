import React, { useRef, useState } from 'react';
import { Grid2, CircularProgress, Container } from '@mui/material';
import useFetchMovies from '../Hooks/useFetchMovies';
import GridItem from '../components/GridItem';
import SearchBar from '../components/SearchBar';
import './Listing.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const Listing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading } = useFetchMovies(searchQuery);
  const prevImage = useRef(null);

  return (
    <Container
      sx={{
        py: 4,
      }}
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Grid2 container spacing={6} 
      sx={{ mt: 2 }}  rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 3 }}
      >
        {movies.map((movie, index) => (
          <Grid2
            key={index}
            size={{ xs: 6, sm:4,md:3,lg:2,xl:3 }}>
            <GridItem movie={movie} prevImage={prevImage}/>
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