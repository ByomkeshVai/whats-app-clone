import React, { useContext, useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { MdGroups } from "react-icons/Md";
import { AiOutlineSync } from "react-icons/Ai";
import { BsFillChatLeftTextFill } from "react-icons/Bs";
import { AuthProvider } from "../../AuthContent/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import ProfileInfo from "../../profile/ProfileInfo";

const Component = styled(Box)`
  height: 60px;
  background: #ededed;

  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 35,
  width: 35,
  borderRadius: "50%",
});

const Header = () => {
  const { account } = useContext(AuthProvider);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Component className="justify-between p-6">
        <Image
          src={account.picture}
          alt="profile-pic"
          className="ml-3"
          onClick={() => toggleDrawer()}
        />
        <Box className="flex gap-6 items-center">
          <MdGroups size={25} />
          <AiOutlineSync size={22} />
          <BsFillChatLeftTextFill size={22} />
          <HeaderMenu />
        </Box>
      </Component>
      <ProfileInfo open={openDrawer} setOpen={setOpenDrawer}></ProfileInfo>
    </>
  );
};

export default Header;
