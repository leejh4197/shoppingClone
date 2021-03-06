import React, { useState } from 'react';
import styled from 'styled-components';
import {dummydata} from './data';

const md = (props) => {
    const datas = ([...dummydata, ...props.list]);
    console.log(datas)
    return (
        <Wrap>
            {
                datas.map((i) => {

                    return (
                        <div className='md-wrap'>
                            <div className='md-img'>
                                <img src={i.image} alt='alt'/>
                                <h4>{i.title}</h4>
                                <p>{i.content} & {i.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Wrap>
    );
};

export default md;

const Wrap = styled.div `
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