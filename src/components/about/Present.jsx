import { Box, Typography } from "@mui/material";
import React from "react";
import AboutCenter from "./AboutCentre";

function Present() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "20px",
        }}
      >
        Avatar Meher Baba Lucknow Centre
      </Typography>
      <AboutCenter />
    </Box>
  );
}

export default Present;
