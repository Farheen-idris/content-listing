import React, { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import './index.css';
import noimage from "./noimage.png"

const IMAGE_API_URL = "https://test.create.diagnal.com/images";
const GridItem = ({ movie }) => {
  const [imageSrc, setImageSrc] = useState(
    `${IMAGE_API_URL}/${movie["poster-image"]}`
  );
  const imageUrl = `${IMAGE_API_URL}/${movie["poster-image"]}`;

  useEffect(() => {
    if (imageUrl.includes("posterthatismissing.jpg")) {
        setImageSrc("");
    }
  }, [movie]);

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
        <CardMedia
          component="img"
          height="auto"
          image={imageSrc ? imageSrc : noimage}
          alt={movie.name}
          sx={{
            width: "100%",
            objectFit: "cover",
            aspectRatio:"6/9"
          }}
          onError={() => setImageSrc("")} // Handle broken image fallback
        />
      <CardContent sx={{ padding: 0 }}>
        <Typography
          color="#FFFFFF"
          className="poster-typograpghy"
        >
          {movie.name}
          {/* {shortenTitle(movie.name)} */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridItem;
