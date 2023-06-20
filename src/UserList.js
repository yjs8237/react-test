import React from 'react';


function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b 
            onClick={() => onToggle(user.id)}
            style={{
                color: user.active ? "green" : "black",
                cursor: 'pointer'
            }}
            >{user.username}</b> <span>{user.email}</span>
            {/* onClick 에 () => 문구를 지정안하면 컴포넌트가 렌더링 될때 onremove 가 호출되기 때문에 */}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users , onRemove, onToggle }) {
    if(users.length === 0) {
        return (
            <></>
        );
    } else {
        return (
                <div>
                {
                    users.map(
                        (user, index) => <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}></User>
                    )
                }
                </div>
        );
    }
    
}

export default UserList;