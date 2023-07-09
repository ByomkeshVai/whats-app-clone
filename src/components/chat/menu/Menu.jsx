import React, { useContext } from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { AuthProvider } from "../../AuthContent/AccountProvider";
import Search from "./Search";
import Conversation from "./Conversation";

const Menu = () => {
  return (
    <Box>
      <Header />
      <Search />
      <Conversation />
    </Box>
  );
};

export default Menu;
