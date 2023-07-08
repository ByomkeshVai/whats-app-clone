import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AuthProvider } from "../AuthContent/AccountProvider";
import styled from "@emotion/styled";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 200,
  height: 240,
  borderRadius: "50%",
  padding: "25px 0",
});

const ProfileArea = () => {
  const { account } = useContext(AuthProvider);
  return (
    <>
      <ImageContainer>
        <Image src={account?.picture} alt="account-picture" />
      </ImageContainer>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  );
};

export default ProfileArea;
