import { Dialog, Box } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chatArea/EmptyChat";

const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: "0",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "none",
};

const ChatDialog = () => {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Box className="flex">
          <Box minWidth={450}>
            <Menu />
          </Box>
          <Box
            minWidth={300}
            width={"100%"}
            height={"100%"}
            borderLeft={"1px solid rgba(0,0,0,0.14)"}
          >
            <EmptyChat />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default ChatDialog;
