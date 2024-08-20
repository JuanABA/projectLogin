// import React, { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const withPermission = (WrappedComponent, requiredPermission) => {
//   return (props) => {
//     const { permissions } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//       if (!permissions || !permissions.includes(requiredPermission)) {
//         navigate("/");
//         alert("You do not have permission to access this section");
//       }
//     }, [permissions]);

//     if (!permissions || !permissions.includes(requiredPermission)) {
//       return null; // Render nothing if the user doesn't have permission
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withPermission;
