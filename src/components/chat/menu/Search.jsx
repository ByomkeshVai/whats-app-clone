import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import React from 'react';
import { BiSearchAlt2 } from 'react-icons/Bi';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 8px;
    color: #919191;
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 17px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px
`


const Search = () => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <BiSearchAlt2 size={20}></BiSearchAlt2>
                </Icon>
                    <InputField placeholder='Search or start new chat' />
            </Wrapper>
        </Component>
    );
};

export default Search;