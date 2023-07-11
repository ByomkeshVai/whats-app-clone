import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { AuthProvider } from "./../AuthContent/AccountProvider";
import { getMessages, newMessage } from "../../api/api";
import AllMessage from "./AllMessage";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;

const Component = styled(Box)`
  height: 72vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 4px 90px;
`;

const Messages = ({ person, chatConversation }) => {
  const { account } = useContext(AuthProvider);
  const [value, setValue] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const [newMessageArea, setNewMessageArea] = useState(false);

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(chatConversation._id);
      setAllMessage(data);
    };
    chatConversation._id && getMessageDetails();
  }, [person._id, chatConversation._id, newMessageArea]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: chatConversation._id,
        type: "text",
        text: value,
      };
      console.log(message);
      await newMessage(message);
      setValue("");
      setNewMessageArea((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {allMessage &&
          allMessage.map((message) => (
            <Container>
              <AllMessage message={message} />
            </Container>
          ))}
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};

export default Messages;
