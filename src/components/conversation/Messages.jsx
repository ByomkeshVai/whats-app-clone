import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { AuthProvider } from "./../AuthContent/AccountProvider";
import { getMessages, newMessage } from "../../api/api";
import AllMessage from "./AllMessage";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
`;

const Component = styled(Box)`
  height: 79vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 4px 90px;
`;

const Messages = ({ person, chatConversation }) => {
  const { account, socket, newMessageArea, setNewMessageArea } =
    useContext(AuthProvider);
  const [value, setValue] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [allMessage]);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    incomingMessage &&
      chatConversation?.members?.includes(incomingMessage.senderId) &&
      setAllMessage((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, chatConversation]);

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
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: chatConversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: chatConversation._id,
          type: "file",
          text: image,
        };
      }

      console.log(message);
      await newMessage(message);
      setValue("");
      setImage("");
      setFile("");

      socket.current.emit("sendMessage", message);
      setNewMessageArea((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {allMessage &&
          allMessage.map((message) => (
            <Container ref={scrollRef}>
              <AllMessage message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
