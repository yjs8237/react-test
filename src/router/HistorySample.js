import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample(props) {
    const navigation = useNavigate();
    const goBack = () => {
        //props.history.goBack();
        navigation(-1);
    }
    const goHome = () => {
        navigation(`/`);
    }
    useEffect(() => {
        console.log(props.history);
    }, [props.history]);
    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;