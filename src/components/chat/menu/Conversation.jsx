import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../../api/api";
import { Box, styled, Divider } from "@mui/material";
import AllConversation from "../../conversation/AllConversation";
import { AuthProvider } from "../../AuthContent/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const DividerStyle = styled(Divider)`
  margin: 0 0 0 79px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUser } = useContext(AuthProvider);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      const filterText = response.filter((user) =>
        user?.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterText);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUser(users);
    });
  }, [account]);

  return (
    <Component>
      {users?.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <AllConversation user={user} />
              <DividerStyle />
            </>
          )
      )}
    </Component>
  );
};

export default Conversation;
