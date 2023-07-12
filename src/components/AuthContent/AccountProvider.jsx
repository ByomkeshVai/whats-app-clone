import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";

export const AuthProvider = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUser, setActiveUser] = useState([]);
  const [newMessageArea, setNewMessageArea] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  const value = {
    account,
    setAccount,
    person,
    setPerson,
    socket,
    activeUser,
    setActiveUser,
    newMessageArea,
    setNewMessageArea,
  };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

export default AccountProvider;
