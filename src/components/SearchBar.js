import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, Box} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Header({ searchQuery, setSearchQuery,setIsShowPoster }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const handleBackClick = () => {
    setSearchQuery("");
    setIsShowPoster(false)
    setIsInputVisible(false)

  };
  const handleInputChange = (e) => {
    setIsShowPoster(false)
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleFocus = () => {
    setIsShowPoster(true)
    setIsInputVisible(true);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 0,
        }}
      >
        <Toolbar
          sx={{
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton onClick={handleBackClick} sx={{py:0}}>
            <ArrowBackIcon sx={{ color: "white" }} />
          </IconButton>
        
          {!isInputVisible ? (
             <Typography
             variant="h4"
             noWrap
             component="div"
             sx={{
               flexGrow: 1,
               whiteSpace: "nowrap",
               overflow: "hidden",
               textOverflow: "ellipsis",
               paddingRight: 4,
               fontSize: {
                 xs: "1.5rem",
                 sm: "2rem",
                 md: "2.5rem",
               },
             }}
           >
             Romantic Comedy
           </Typography>
          ) : (
            <TextField
            variant="standard"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            autoFocus
             sx={{
              width: "100%",
              paddingLeft: 0,
              paddingRight: 4, 
            }}
            InputProps={{
              disableUnderline: true, 
              sx: {
                borderBottom: "2px solid gray",
              },
            }}
          />
          
          
          )}
           <Box sx={{ position: "absolute", right: 0, color: "white" }}>
              <IconButton onClick={handleFocus} sx={{padding:0}}>
                <SearchIcon sx={{ color: "white",padding:0 }} />
              </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

