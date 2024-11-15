import { useState, useEffect } from 'react';

const BASE_API_URL = 'https://test.create.diagnal.com/data';

const useFetchMovies = (searchQuery) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);  // Start from page 1
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);  // To check if more pages are available

  const fetchMovies = async () => {
    if (loading) return; // Prevent multiple fetches at once
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/page${page}.json`);
      const data = await response.json();
      const fetchedMovies = data.page['content-items'].content;

      if (fetchedMovies.length > 0) {
        // Append new movies to existing list
        setMovies((prev) => [...prev, ...fetchedMovies]);
        setHasMore(true);  // More pages available
      } else {
        setHasMore(false);  // No more data, stop loading
      }

      // Increment page after fetching
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch movies when the page changes
    if (page === 1) {  // Only fetch the first page initially
      fetchMovies();
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&  // Scroll near the bottom
        hasMore && 
        !loading
      ) {
        fetchMovies();  // Fetch the next page when scrolled to the bottom
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
  }, [hasMore, loading]);  // Run when loading or hasMore changes

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())  // Filter movies based on search query
  );

  return { movies: filteredMovies, loading, fetchMovies };
};

export default useFetchMovies;
