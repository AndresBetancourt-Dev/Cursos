import React, {createContext} from 'react'
export const UserContext = createContext(null);
const UserProvider = () => {
  return (
    <div>UserContext</div>
  )
}

export default UserContext