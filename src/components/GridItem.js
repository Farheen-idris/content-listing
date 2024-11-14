import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const IMAGE_API_URL = 'https://test.create.diagnal.com/images';

const GridItem = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 150, m: 1,backgroundColor:'#171717' }}>
      <CardMedia
        component="img"
        height="225"
        image={`${IMAGE_API_URL}/${movie['poster-image']}`}
        alt={movie.name}
      />
      <CardContent>
        <Typography variant="body2" color="#FFFFFF" sx={{fontSize:"20px"}}>
          {movie.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridItem;
