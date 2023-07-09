import React, { useContext } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { Box } from "@mui/material";
import { AuthProvider } from "../AuthContent/AccountProvider";

const ChatBox = () => {
  const { person } = useContext(AuthProvider);
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
