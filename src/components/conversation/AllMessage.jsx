import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { downloadMedia, formatDate } from "../../utils/utils";
import { AuthProvider } from "../AuthContent/AccountProvider";
import { MdGetApp } from "react-icons/Md";
import { iconPDF } from "../data";

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 50%;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  padding: 10px;
`;

const Wrapper = styled(Box)`
  background: #fff;
  max-width: 50%;
  margin-left: auto;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  padding: 10px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

const AllMessage = ({ message }) => {
  const { account } = useContext(AuthProvider);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message?.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {message?.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Wrapper>
      )}
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Box>
        <Text>{message.text}</Text>
        <Time>{formatDate(message.createdAt)}</Time>
      </Box>
    </>
  );
};

const FileMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {message?.text?.includes(".pdf") ? (
        <Box className="flex items-center">
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <Typography style={{ fontSize: "14px" }}>
            {message.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <MdGetApp
          size={28}
          className="cursor-pointer"
          onClick={(e) => downloadMedia(e, message.text)}
        />
        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};

export default AllMessage;
