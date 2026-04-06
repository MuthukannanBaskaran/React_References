import { useEffect, useState } from "react"
import { getPosts, deletePosts } from "../services/postService";
import type { GetPostType } from "../types/postType";
import CreatePostForm from "./CreatePostForm";

export default function DisplayPosts() {
    const [posts, setPosts] = useState<GetPostType[]>([]);
    const [editingPost, setEditingPost] = useState<GetPostType | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    function deletePost(id: number) {
        deletePosts(id)
            .then(() => {
                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    }

    const startEditing = (post: GetPostType) => {
        setEditingPost(post);
    }

    return (
        <>
            <div>
                <h1>Display Posts</h1>
                <CreatePostForm posts={posts} setPosts={setPosts} editingPost={editingPost} setEditingPost={setEditingPost} />
            </div>
            <ul>
                {
                    posts.map((post) => (
                        <li className="li-posts" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <button className="editButton" onClick={() => startEditing(post)}>Edit</button>
                            <button className="deleteButton" onClick={() => deletePost(post.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
