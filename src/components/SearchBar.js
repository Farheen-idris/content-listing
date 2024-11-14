import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, Box } from "@mui/material";

export default function Header({ searchQuery, setSearchQuery }) {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleFocus = () => {
    setIsInputVisible(true);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Romantic Comedy
        </Typography>
        {!isInputVisible ? (
          <Box
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <IconButton onClick={handleFocus}>
              <SearchIcon sx={{ color: "white" }} />
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
  );
}
