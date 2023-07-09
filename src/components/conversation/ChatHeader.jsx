import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/Bi";
import { FiMoreVertical } from "react-icons/Fi";
import { defaultProfilePicture } from "../data";

const Header = styled(Box)`
  height: 71px;
  background: #ededed;
`;

const Status = styled(Typography)`
  font-size: 12px;
  color: rgb(0, 0, 0, 0, 6);
  opacity: 0.7;
`;

const ChatHeader = () => {
  return (
    <Header className="flex items-center justify-between px-5">
      <Box className="flex items-center gap-4">
        <img
          src={defaultProfilePicture}
          alt="demo-dp"
          className="h-10 w-10 object-cover rounded-full"
        />
        <Box className="flex flex-col gap-1">
          <Typography>Name</Typography>
          <Status>Online Status</Status>
        </Box>
      </Box>
      <Box className="flex gap-7">
        <BiSearch size={21} />
        <FiMoreVertical size={21} />
      </Box>
    </Header>
  );
};

export default ChatHeader;
