import React from 'react';
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import Md from '../shared/md';

const Nav = () => {
    return (
        <Wrap>
            <div className='bodyWrap'>
                <div className='text-wrap'>
                <div className='maintext'>20% Season Off</div>
                <div>20% 세일 중 입니다.</div>
                <button>더보기</button>
                </div>
            </div>
            <Md/>
        </Wrap>
    );
};

export default Nav;

const Wrap = styled.div `
    .bodyWrap{
        width: 100%;
        height: 250px;
        background-image: url('/dog.jpg');
        background-size: cover;
        position: relative;
        .text-wrap{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .maintext{
                font-size: 45px;
                color: white;
            }
            div{
                font-size: 25px;
                color: white;
                margin-bottom: 20px;
            }
            button{
                border: none;
                color: white;
                background-color: coral;
                border-radius: 2px;
                cursor: pointer;
                &:hover{
                    background-color: white;
                    color: coral;
                }
            }
        }
    }
`