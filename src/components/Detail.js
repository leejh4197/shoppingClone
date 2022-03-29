import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

import {dummydata} from '../shared/data';

const Detail = () => {
    const history = useHistory();
    const {id} = useParams();
    const [active, setActive] = useState(false);
    const [test, setTest] = useState('');

    const findId = (e) => {
        if (e.id == id) {
            return true;
        }
    }
    const fiId = dummydata.find(findId);

    console.log(fiId)

    useEffect(() => {
           let timer = setTimeout(()=>{setActive(!active)},2000)
           return ()=>{ clearTimeout(timer)}
    },[])
    return (
        <div className="container">
            <Test>
                <h4 className='red'>안녕하세요</h4>
            </Test>

            {test}
            <input onChange={(e)=>{setTest(e.target.value)}}/>

            {
                active === false
                    ? (
                        <div className='alert2'>
                            <p>재고가 얼마 남지 않았습니다.</p>
                        </div>
                    )
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={fiId.image} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{fiId.title}</h4>
                    <p>{fiId.content}</p>
                    <p>{fiId.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            history.goBack()
                        }}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;

const Test = styled.div `

`