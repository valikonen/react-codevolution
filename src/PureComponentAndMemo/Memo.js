import React from 'react';

const Memo = ({name}) => {
    console.log('Memo rendered');
    return (
        <div>
            {name}
        </div>
    );
}

export default React.memo(Memo);
