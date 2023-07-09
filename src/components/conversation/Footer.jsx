import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { AiOutlinePaperClip } from "react-icons/Ai";
import { BsFillMicFill } from "react-icons/Bs";
import { MdOutlineEmojiEmotions } from "react-icons/Md";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
`;

const InputArea = styled(Box)`
  background-color: #fff;
  border-radius: 18px;
  width: calc(96% - 90px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container className="flex items-center font-[#919191] border border-1">
      <Box className="flex gap-3 items-center p-4">
        <MdOutlineEmojiEmotions size={23} />
        <AiOutlinePaperClip size={23} />
      </Box>
      <InputArea>
        <InputField placeholder="Type a message" />
      </InputArea>
      <BsFillMicFill size={18} className="ml-3" />
    </Container>
  );
};

export default Footer;
