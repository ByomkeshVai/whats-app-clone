import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { Box } from "@mui/material";
import { AuthProvider } from "../AuthContent/AccountProvider";
import { getConversation } from "../../api/api";

const ChatBox = () => {
  const { person, account } = useContext(AuthProvider);
  const [chatConversation, setChatConversation] = useState({});
  useEffect(() => {
    const getConversationDetail = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setChatConversation(data);
    };
    getConversationDetail();
  }, [person.sub]);
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} chatConversation={chatConversation} />
    </Box>
  );
};

export default ChatBox;
