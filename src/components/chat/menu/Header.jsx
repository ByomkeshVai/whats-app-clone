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
  height: 71px;
  background: #ededed;

  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 39,
  width: 39,
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
      <Component className="justify-between py-6 px-4">
        <Image
          src={account.picture}
          alt="profile-pic"
          className="ml-3"
          onClick={() => toggleDrawer()}
        />
        <Box className="flex gap-6 items-center">
          <MdGroups size={25} className="cursor-pointer" />
          <AiOutlineSync size={22} className="cursor-pointer" />
          <BsFillChatLeftTextFill size={22} className="cursor-pointer" />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Box>
      </Component>
      <ProfileInfo open={openDrawer} setOpen={setOpenDrawer}></ProfileInfo>
    </>
  );
};

export default Header;
