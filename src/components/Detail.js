import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { dummydata } from '../shared/data';

const Detail = () => {
    const history = useHistory();
    const { id } = useParams();

    console.log(id)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={dummydata[id].image} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{dummydata[id].title}</h4>
                    <p>{dummydata[id].content}</p>
                    <p>{dummydata[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;