import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
import Post from "./Post";

export default function BlogPage() {
    const userInfo = useContext(UserInfoContext);

    return (
        <div className="blog-page">
            <h1>Blog Page</h1>
            <p>This is the blog page content.</p>
            <p>{userInfo.firstname}</p>
            <Post />
        </div>
    )
}