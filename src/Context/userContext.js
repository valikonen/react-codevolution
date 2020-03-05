import React from 'react'

const UserContext = React.createContext({name: "Zorro", age: 39});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;