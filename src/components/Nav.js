import React from 'react';
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import { dummydata } from '../shared/data';

const Nav = () => {
    return (
        <Wrap>
            <div className='navbar'>
                <span>
                    shopping mall
                </span>
                <GiHamburgerMenu className='icon'/>
            </div>
            <div className='bodyWrap'>
                <div className='text-wrap'>
                <div className='maintext'>20% Season Off</div>
                <div>20% 세일 중 입니다.</div>
                <button>더보기</button>
                </div>
            </div>
            <div className='md-wrap'>
                <div className='md-img'>
                <img src='https://codingapple1.github.io/shop/shoes1.jpg'/>
                <h4>{dummydata[0].title}</h4>
                <p>상품설명 & 가격</p>
                </div>
                <div className='md-img'>
                <img src='https://codingapple1.github.io/shop/shoes2.jpg'/>
                <h4>상품명</h4>
                <p>상품설명 & 가격</p>
                </div>
                <div className='md-img'>
                <img src='https://codingapple1.github.io/shop/shoes3.jpg'/>
                <h4>상품명</h4>
                <p>상품설명 & 가격</p>
                </div>
            </div>
        </Wrap>
    );
};

export default Nav;

const Wrap = styled.div `
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: coral;
        span{
            padding: 10px;
            font-weight: bold;
            font-size: 20px;
            color: white;
        }
        .icon{
            padding: 10px;
            font-size: 20px;
            color: white;
        }
    }
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
    .md-wrap{
        width: 50%;
        margin: 0 auto;
        .md-img{
            img{
                width: 100%;
            }
        }
    }
`