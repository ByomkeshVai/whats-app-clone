import React, { useContext } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { MdGroups } from 'react-icons/Md';
import { AiOutlineSync } from 'react-icons/Ai';
import { FiMoreVertical } from 'react-icons/Fi';
import { BsFillChatLeftTextFill } from 'react-icons/Bs';
import { AuthProvider } from '../../AuthContent/AccountProvider';





const Component = styled(Box)`
        height: 60px;
        background: #ededed;
        
        display: flex;
        align-items: center;
    `
const Image = styled('img')({
    height: 35,
    width: 35,
    borderRadius: '50%'
})

const Header = () => {
    const {account} = useContext(AuthProvider)
    return (
        <Component className='justify-between p-6'>
            <Image src={account.picture} alt="profile-pic" className='ml-3'/>
            <Box className="flex gap-6 items-center">
                 <MdGroups size={25}/>
                <AiOutlineSync size={22} />
                <BsFillChatLeftTextFill size={22} />
                <FiMoreVertical size={22}/>
            </Box>
        </Component>
    );
};

export default Header;