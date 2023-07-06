import { Dialog, List, ListItem, Typography, Box } from '@mui/material';
import React, { useContext } from 'react';
import { qrCodeImage } from '../data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { AuthProvider } from '../AuthContent/AccountProvider';

const dialogStyle = {
    height: '96%',
    width: '60%',
    marginTop: '12%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'none',
}

const LoginArea = () => {
    const { setAccount } = useContext(AuthProvider);
    
    const onLoginSuccess = (res) => {
        const decoded = jwt_decode(res.credential)
        setAccount(decoded);
    }

    const onLoginError = (res) => {
        console.log(res);
    }

    return (
        <>
        <Dialog  open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
            <Box className="flex justify-between items-center p-12 mt-5">
                    <Box className="ml-5">
                        <Typography variant="h4" component="h2" fontSize={26} color={'#525252'} fontWeight={300} mb={4}>To Use Whatsapp on your computer: </Typography>
                <List>
                    <ListItem>1. Open Whatsapp On Your Phone</ListItem>
                    <ListItem>2. Tap Menu Settings and Select Whatsapp Web</ListItem>
                    <ListItem>3. Point Your Phone to this screen to capture the code</ListItem>
                </List>
                    </Box>
                    <Box>
                        <img src={qrCodeImage} alt="qr-image" className='h-64 mr-10' />
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                            />
                    </Box>
            </Box>
        </Dialog>
        </>
    );
};

export default LoginArea;