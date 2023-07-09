import React, { useEffect, useState } from "react";
import { getUser } from "../../../api/api";
import { Box } from "@mui/material";
import AllConversation from "../../conversation/AllConversation";

const Conversation = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();
      setUsers(response);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {users?.map((user) => (
        <AllConversation user={user} />
      ))}
    </Box>
  );
};

export default Conversation;
