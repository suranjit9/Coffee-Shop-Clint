import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const Protedter = ({children}) => {
    const {user, loder} = useContext(authContext);
    const loction = useLocation();

    if (loder) {
        return <div className="text-center mt-6"><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate state={loction.pathname} to = '/LogIn'></Navigate>
};
Protedter.propTypes ={
    children:PropTypes.node,
}
export default Protedter;