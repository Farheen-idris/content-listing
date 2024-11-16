import React, { useEffect, useState } from "react";
import { Grid2, CircularProgress, Container, Typography } from "@mui/material";
import useFetchMovies from "../Hooks/useFetchMovies";
import GridItem from "../components/GridItem";
import SearchBar from "../components/SearchBar";
import "./Listing.css";

const Listing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowPoster, setIsShowPoster] = useState(false);
  const { movies, loading,containerRef } = useFetchMovies(searchQuery);

  return (
    <Container className="container-height" ref={containerRef}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsShowPoster={setIsShowPoster}
      />
      <Grid2
        container
        spacing={6}
        sx={{ mt: 2,
          display: "flex",
          justifyContent: isShowPoster?"center":"left", 
          alignItems: "center",
          flex:isShowPoster?1:0
         }}
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 3 }}
        
      >
        {!isShowPoster ? (
          movies.map((movie, index) => (
            <Grid2 key={index} size={{ xs: 4, sm: 4, md: 4, lg: 3, xl: 3 }}>
              <GridItem movie={movie} />
            </Grid2>
          )) 
        ) : (
              <Typography  className="search-type">Search for movie....</Typography>
        )}
      </Grid2>

      {loading && (
        <Container sx={{ display: "flex", justifyContent: "center", py: 2 }}>
          <CircularProgress />
        </Container>
      )}
    </Container>
  );
};

export default Listing;
