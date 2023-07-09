import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthProvider } from "../AuthContent/AccountProvider";
import DefaultImage from "../../assets/default.jpg";
import { setConversation } from "../../api/api";

const AllConversation = ({ user }) => {
  const { account, setPerson } = useContext(AuthProvider);
  const getPerson = async () => {
    setPerson(user);
    await setConversation({ senderID: account.sub, receiverID: user.sub });
  };
  return (
    <Box
      className="flex p-3 cursor-pointer items-center gap-3"
      onClick={() => getPerson()}
    >
      <Box>
        <img
          src={user?.picture}
          onError={DefaultImage}
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
