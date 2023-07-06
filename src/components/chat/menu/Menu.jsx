import React, { useContext } from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import { AuthProvider } from '../../AuthContent/AccountProvider';
import Search from './Search';





const Menu = () => {
    
    return (
        <Box>
            <Header />
            <Search />
        </Box>
    );
};

export default Menu;