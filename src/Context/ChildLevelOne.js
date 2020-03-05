import React from 'react'
import {UserConsumer} from './userContext'
import ChildLevelTwo from './ChildLevelTwo';

export default function ChildLevelOne() {
    return (
        <>
            <UserConsumer>
                {
                    (value) => {
                        return <p>Hello {JSON.stringify(value)}</p>
                    }
                }
            </UserConsumer>
            <ChildLevelTwo />
        </>
    )
}

