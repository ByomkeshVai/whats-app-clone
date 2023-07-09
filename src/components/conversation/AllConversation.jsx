import { Box, Typography } from "@mui/material";
import React from "react";

const AllConversation = ({ user }) => {
  return (
    <Box className="flex  p-3 cursor-pointer items-center gap-3">
      <Box>
        <img
          src={user.picture}
          alt="user-dp"
          className="w-14 rounded-full object-cover"
        />
      </Box>
      <Box>
        <Typography>{user.name}</Typography>
      </Box>
    </Box>
  );
};

export default AllConversation;
