import React from 'react';

function ChildFunc(props) {

    const user = {
        name: 'Zorro',
        age: 67
    }

    console.log(props);

    return (
        <div>
            <button onClick={() => props.handlerLogUser(user)}>Log user</button>
        </div>
    );
}

export default ChildFunc;
