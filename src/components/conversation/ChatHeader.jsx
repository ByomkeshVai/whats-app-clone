import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/Bi";
import { FiMoreVertical } from "react-icons/Fi";
import { defaultProfilePicture } from "../data";
import DefaultImage from "../../assets/default.jpg";
import { AuthProvider } from "../AuthContent/AccountProvider";

const Header = styled(Box)`
  height: 71px;
  background: #ededed;
`;

const Status = styled(Typography)`
  font-size: 12px;
  color: rgb(0, 0, 0, 0, 6);
  opacity: 0.7;
`;

const ChatHeader = ({ person }) => {
  const { activeUser } = useContext(AuthProvider);
  console.log(activeUser);
  return (
    <Header className="flex items-center justify-between px-5">
      <Box className="flex items-center gap-4">
        <img
          src={person?.picture}
          onError={DefaultImage}
          alt="demo-dp"
          className="h-10 w-10 object-cover rounded-full"
        />
        <Box className="flex flex-col gap-1">
          <Typography>{person.name}</Typography>
          <Status>
            {activeUser?.find((user) => user.sub === person.sub)
              ? "Online"
              : "Offline"}
          </Status>
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
