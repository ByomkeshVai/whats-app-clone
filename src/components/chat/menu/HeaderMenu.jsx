import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/Fi";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 13px 40px 5px 25px;
  color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      <FiMoreVertical
        size={22}
        className="cursor-pointer"
        onClick={handleClick}
      />
      <Menu
        className="mt-2"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
