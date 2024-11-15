import React, { useState, useEffect, useRef } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const IMAGE_API_URL = "https://test.create.diagnal.com/images";
const GridItem = ({ movie, prevImage }) => {
  const [imageSrc, setImageSrc] = useState(
    `${IMAGE_API_URL}/${movie["poster-image"]}`
  );
  const imageUrl = `${IMAGE_API_URL}/${movie["poster-image"]}`;

  useEffect(() => {
    if (!imageUrl.includes("posterthatismissing.jpg")) {
      prevImage.current = imageUrl;
      setImageSrc(imageUrl);
    } else {
      if (prevImage.current) {
        setImageSrc(prevImage.current);
      }
    }
  }, [movie]);


  const shortenTitle = (title) => {
    return title.length > 15 ? title.slice(0, 10) + "..." : title;
  };
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={imageSrc}
        alt={movie.name}
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography
          color="#FFFFFF"
          sx={{
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          {shortenTitle(movie.name)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridItem;
