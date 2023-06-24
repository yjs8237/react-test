import React from 'react';
import { useParams } from 'react-router-dom';


const profileData = {
    greatyun: {
        name: "윤지상",
        descrption: "description"
    },
    sam: {
        name: "sam",
        descrption: "sam description"
    }
}

function Profile({ match }) {
    console.log(match);

    const { name } = useParams();
    const profile = profileData[name];
    if(!profile) {
        return <div>존재하지 않는 사용자</div>;
    }
    return (
        <div>
            <h3>{name} ({profile.name}) ({profile.descrption})</h3>
        </div>
    );
}

export default Profile;