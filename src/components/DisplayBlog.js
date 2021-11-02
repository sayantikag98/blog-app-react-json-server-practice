import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {dataFetch} from "./dataFetch";
import NotFound from "./NotFound";

export default function DisplayBlog({setBlogs}){
    const {id} = useParams();  // id is a string 
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    let history = useHistory();

    useEffect(() => {
        dataFetch(`http://localhost:5000/blogs/${id}`, setBlog, setError);   
    }, [id]);

    const HandleEdit = () => {
    };

    const HandleDelete = async() => {
        try{
            const response = await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE"
            });
            if(response.ok){
                console.log("Blog deleted...");
                dataFetch("http://localhost:5000/blogs", setBlogs, setError);
                history.push("/");
            }
        }
        catch(err){
            setError(err.message);
        }
    };

    return (
        <main>
            {blog && 
            <section className = "blog-section">
                <h2>{blog.title}</h2>
                <h6>{blog.author}</h6>
                <p>{blog.body}</p>
                <section id = "button-section">
                    <Link to = {`/edit/${id}`}>
                        <button onClick = {HandleEdit}>Edit Blog</button>
                    </Link>
                    <button onClick = {HandleDelete}>Delete Blog</button>
                </section>   
            </section>} 
            {error && <NotFound/>}    
        </main>
    );
}