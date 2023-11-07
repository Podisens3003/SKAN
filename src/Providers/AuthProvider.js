import { createContext, useState } from 'react'


export const AuthContext = createContext();

function isUserAuthorised() {
    return !!localStorage.getItem('token') === true ? true : false;
}
const AuthProvider = ({children}) => {
    const [isAuth, setAuth] = useState(isUserAuthorised);
    return (
        <AuthContext.Provider value={{isAuth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;