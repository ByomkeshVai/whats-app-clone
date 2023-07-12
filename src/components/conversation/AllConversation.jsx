import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../AuthContent/AccountProvider";
import DefaultImage from "../../assets/default.jpg";
import { setConversation, getConversation } from "../../api/api";
import { formatDate } from "../../utils/utils";

const Container = styled(Box)`
  display: flex;
`;
const TimeStamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;
const AllConversation = ({ user }) => {
  const { account, setPerson, newMessageArea } = useContext(AuthProvider);
  const [messages, setMessages] = useState({});
  const getPerson = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
    console.log(setConversation);
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessages({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageArea]);

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
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user?.name}</Typography>
          {messages?.text && (
            <TimeStamp>{formatDate(messages?.timestamp)}</TimeStamp>
          )}
        </Container>
        <Text>
          {messages?.text?.includes("localhost") ? "media" : messages.text}
        </Text>
      </Box>
    </Box>
  );
};

export default AllConversation;
