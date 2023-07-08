import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import ProfileArea from "./ProfileArea";
import { MdOutlineArrowBack } from "react-icons/Md";
import styled from "@emotion/styled";

const drawerStyle = {
  left: 21,
  top: 32,
  width: "23.3%",
};

const Header = styled(Box)`
  background: #008069;
  height: 130px;
  color: #fff;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const ProfileInfo = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <Box className="flex gap-6 p-3 ml-3 mt-16 items-center">
          <MdOutlineArrowBack size={25} onClick={() => setOpen(false)} />
          <Typography fontSize={20}>Profile</Typography>
        </Box>
      </Header>
      <Component>
        <ProfileArea></ProfileArea>
      </Component>
    </Drawer>
  );
};

export default ProfileInfo;
