import React from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useHistory } from 'react-router-dom';


const Head = () => {
    const history = useHistory();

    return (
        <Wrap>
            <div className='navbar'>
                <span>
                    shopping mall
                </span>
                <span className='sub-name' onClick={()=>{history.push('/')}}>
                    home
                </span>
                <span className='sub-name' onClick={()=>{history.push('/detail')}}>
                    detail
                </span>
                <GiHamburgerMenu className='icon'/>
            </div>
        </Wrap>
    );
};

export default Head;
const Wrap = styled.div`
    .navbar{
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: coral;
        position: relative;
        span{
            padding: 10px;
            font-weight: bold;
            font-size: 20px;
            color: white;
        }
        .sub-name{
            font-size: 15px;
            cursor: pointer;
            &:hover{
                color: red;
            }
        }
        .icon{
            padding: 10px;
            font-size: 20px;
            color: white;
            position: absolute;
            right: 0;
        }
    }
`