import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Home(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    return (
        <div>
            home
            <p>{page} {size} </p>
        </div>
    );
}

export default Home;