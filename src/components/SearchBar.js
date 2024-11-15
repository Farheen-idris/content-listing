import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, Box, Snackbar, Alert } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Header({ searchQuery, setSearchQuery }) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setOpenSnackbar(true);
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  const handleFocus = () => {
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
          <IconButton onClick={handleBackClick}>
            <ArrowBackIcon sx={{ color: "white", marginRight: 2 }} />
          </IconButton>
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
          {!isInputVisible ? (
            <Box sx={{ position: "absolute", top: 10, right: 10, color: "white" }}>
              <IconButton onClick={handleFocus} sx={{padding:0}}>
                <SearchIcon sx={{ color: "white", fontSize: "2rem" }} />
              </IconButton>
            </Box>
          ) : (
            <TextField
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleFocus}
              sx={{
                width: isInputVisible ? "100%" : "auto",
                paddingLeft: 5,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
            />
          )}
        </Toolbar>
      </AppBar>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="warning">
          No page to go back to
        </Alert>
      </Snackbar>
    </>
  );
}

