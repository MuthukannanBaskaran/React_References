import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment() {
    const userInfo = useContext(UserInfoContext);
    const _usermod = { ...userInfo, isAdmin: true }
    return (
        <div>
            <h1>Comment Page</h1>
            <p>This is the comment page content.</p>
            <h2>Original Data</h2>
            {
                userInfo.isAdmin ? (<p>Welcome, Admin User {userInfo.firstname}!</p>)
                    : (<p>Welcome, Guest User {userInfo.firstname}!</p>)
            }
            <h2>Local Modification</h2>
            {
                _usermod.isAdmin ? (<p>Welcome, Admin User {_usermod.firstname}!</p>)
                    : (<p>Welcome, Guest User {_usermod.firstname}!</p>)
            }
        </div>
    )
}