import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
    const isAuthenticated = /*logic to determine if the user is logged in*/ 
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;