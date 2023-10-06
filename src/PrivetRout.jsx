/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
    if(loading){
        return <div className="flex justify-center items-center"><span className="text-9xl loading loading-infinity loading-lg"></span></div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate state={location.pathname} to={`/login`}/>
};

export default PrivetRout;


{/*  */}