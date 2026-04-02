import { useState, useEffect } from "react";
import type { GetPostType } from "../types/postType";
import { createPost, updatePost } from "../services/postService";

export default function CreatePostForm({ posts, setPosts, editingPost, setEditingPost }:
    {
        posts: GetPostType[], setPosts: React.Dispatch<React.SetStateAction<GetPostType[]>>,
        editingPost: GetPostType | null, setEditingPost: React.Dispatch<React.SetStateAction<GetPostType | null>>
    }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        } else {
            setTitle("");
            setBody("");
        }
    }, [editingPost]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() === "" || body.trim() === "") {
            alert("Title and Body cannot be empty.");
            return;
        }
        if (!editingPost) {
            const id = posts.length > 0
                ? Math.max(...posts.map(p => p.id)) + 1
                : 1;
            addPost(id, title, body);
        } else {
            editPost();
        }
        setTitle("");
        setBody("");
        setEditingPost(null);
    };

    const editPost = () => {
        updatePost(editingPost!.id, { id: editingPost!.id, userId: editingPost!.userId, title, body })
            .then((response) => {
                setPosts(prevPosts => prevPosts.map(post => post.id === editingPost!.id ? response.data : post));
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            });
    }

    const addPost = (id: number, title: string, body: string) => {
        createPost({ id, userId: 1, title, body })
            .then((response) => {
                setPosts(prevPosts => [...prevPosts, response.data]); // newest first
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            });
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title:</div>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <div>Body:</div>
                    <textarea id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit">{editingPost ? "Update Post" : "Create Post"}</button>
                </div>
            </form>
        </div>
    );
}