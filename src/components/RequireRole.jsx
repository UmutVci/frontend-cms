import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../features/auth/useAuth";

export default function RequireRole({ role, children }) {
    const userRole = useAuth(state => state.role);
    const location = useLocation();
    if (userRole !== role) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}