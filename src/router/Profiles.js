import React from 'react';
import { Link, Route } from 'react-router-dom';

function Profiles(props) {
    
    return (
        <div>
            <h3>사용자 목록</h3>        
            <ul>
                <li>
                    <Link to="/profiles/greatyun">greatyun</Link>
                </li>
                <li>
                <Link to="/profiles/sam">sam</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Profiles;