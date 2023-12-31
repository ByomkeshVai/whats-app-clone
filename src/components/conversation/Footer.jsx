import { Box, InputBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/Ai";
import { BsFillMicFill } from "react-icons/Bs";
import { MdOutlineEmojiEmotions } from "react-icons/Md";
import { UploadFile } from "../../api/api";

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

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  console.log(file);
  useEffect(() => {
    const setImages = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await UploadFile(data);
        setImage(response.data);
      }
    };
    setImages();
  }, [file]);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Container className="flex items-center font-[#919191] border border-1">
      <Box className="flex gap-3 items-center p-4">
        <MdOutlineEmojiEmotions size={23} />
        <label htmlFor="fileInput">
          <AiOutlinePaperClip size={23} />
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => onFileChange(e)}
        />
      </Box>
      <InputArea>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => sendText(e)}
          value={value}
        />
      </InputArea>
      <BsFillMicFill size={18} className="ml-3" />
    </Container>
  );
};

export default Footer;
