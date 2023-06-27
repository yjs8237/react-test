import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function About(props) {
    const navigator = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    
    return (
        <div>
            여긴 어바웃
            <p>{page} {size} </p>
            <button onClick={() => navigator(`/?page=${page}&size=${size}`)}>홈으로 이동</button>
            <button onClick={() => navigator('/history', { replace: true })}>replace</button>
        </div>
    );
}

export default About;