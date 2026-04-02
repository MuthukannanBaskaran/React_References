import axios from "axios";
import type { CreatePostType } from "../types/postType";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const getPosts = () => api.get("/posts");

export const deletePosts = async (id: number) => {
    return await api.delete(`/posts/${id}`);
};

export const createPost = async (postData: CreatePostType) => {
    return await api.post("/posts", postData);
}

export const updatePost = async (id: number, postData: CreatePostType) => {
    return await api.put(`/posts/${id}`, postData);
}