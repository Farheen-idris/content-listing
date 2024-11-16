import { useState, useEffect ,useRef} from 'react';

const BASE_API_URL = 'https://test.create.diagnal.com/data';

const useFetchMovies = (searchQuery) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null); 

  const fetchMovies = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/page${page}.json`);
      const data = await response.json();
      const fetchedMovies = data.page['content-items'].content;
      if (fetchedMovies.length > 0) {
        setMovies((prev) => [...prev, ...fetchedMovies]);
        setHasMore(true); 
      } else {
        setHasMore(false);
      }
      
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchMovies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore && !loading && page<=3) {
        fetchMovies(); 
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasMore, loading]);
  const filteredMovies = movies.filter((movie) =>
  movie.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  return {
    movies:filteredMovies,
    loading,
    hasMore,
    fetchMovies,
    containerRef
  };

};

export default useFetchMovies;
