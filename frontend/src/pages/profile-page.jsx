import React from "react";
import { useUser } from "../context/userContext.jsx";

const ProfilePage = () => {
    const { logout } = useUser(); // Access the logout function

    const handleLogout = () => {
        logout(); // Call logout when the user clicks the button
    };

    return (
        <div className="profile-page">
            <h2>Welcome, {localStorage.getItem("email")}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProfilePage;
