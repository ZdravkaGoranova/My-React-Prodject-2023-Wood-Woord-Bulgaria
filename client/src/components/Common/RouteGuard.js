import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext } from 'react'


export default function RouteGuard({ children }) {

    const { isAuthenticated } = useContext(AuthContext);
    //console.log(isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }
    return children ? children : <Outlet />
}


// export default function RouteGuard({ children }) {

//     const { isAuthenticated } = useContext(AuthContext);

//     if (!isAuthenticated) {
//         return <Navigate to='/login' />
//     }
//     return (
//         <>
//             {children}
//         </>
//     )
// }
