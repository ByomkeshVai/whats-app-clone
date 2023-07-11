import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { formatDate } from "../../utils/utils";
import { AuthProvider } from "../AuthContent/AccountProvider";

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
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Own>
      ) : (
        <Wrapper>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wrapper>
      )}
    </>
  );
};

export default AllMessage;
