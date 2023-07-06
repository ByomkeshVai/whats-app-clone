import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, styled } from '@mui/material';
import LoginArea from './account/LoginArea';
import { AuthProvider } from './AuthContent/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background-color: #dcdcdc;
`

const LoginHeader = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow: none;
`

const ChatHeader = styled(AppBar)`
    height: 125px;
    background-color: #00a884;
    box-shadow: none;
`

const Messanger = () => {
    const { account } = useContext(AuthProvider)
    
    return (
        <>
            {
                account ?
                    <>
                        <ChatHeader>
                        <Toolbar>
            
                        </Toolbar>
                        </ChatHeader>
                        <ChatDialog />
                        </>
                    :
                    <>
            <Component>
            <LoginHeader>
        <Toolbar>
         
        </Toolbar>
      </LoginHeader>
        </Component>
                        <LoginArea />
                        </>
            }
        </>
    );
};

export default Messanger;