import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import Md from '../shared/md';
import axios from 'axios'


const Nav = () => {
    const [list, setList] = useState([]);
    return (
        <Wrap>
            <div className='bodyWrap'>
                <div className='text-wrap'>
                <div className='maintext'>20% Season Off</div>
                <div>20% 세일 중 입니다.</div>
                <button>더보기</button>
                </div>
            </div>
            <Md list={list}/>
            <button className='btn' onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json').then((res)=>{
                    setList(res.data)
                }).catch(()=>{console.log('에러')})
             }}>더보기</button>
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