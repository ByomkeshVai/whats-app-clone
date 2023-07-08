import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthProvider } from "../AuthContent/AccountProvider";
import styled from "@emotion/styled";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 190,
  height: 240,
  borderRadius: "50%",
  padding: "25px 0",
});

const DescriptionHere = styled(Box)`
  padding: 28px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

const ProfileArea = () => {
  const { account } = useContext(AuthProvider);
  return (
    <>
      <ImageContainer>
        <Image src={account?.picture} alt="account-picture" />
      </ImageContainer>
      <Box className="bg-white pl-8 p-5 mt-7 gap-4 flex flex-col">
        <Typography fontSize={13} color={"#009688"}>
          Your Name
        </Typography>
        <Typography fontSize={16} color={"#4a4a4a"}>
          {account.name}
        </Typography>
      </Box>
      <DescriptionHere>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionHere>
      <Box className="bg-white pl-8 p-5 mt-4 gap-4 flex flex-col">
        <Typography fontSize={13} color={"#009688"}>
          About
        </Typography>
        <Typography fontSize={16} color={"#4a4a4a"}>
          Urgent Call Only!
        </Typography>
      </Box>
    </>
  );
};

export default ProfileArea;
