import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";

import {dataFetch} from "./dataFetch";

export default function DisplayBlog(){
    const {id} = useParams();  // id is a string 
    const [blog, setBlog] = useState(null);
    let history = useHistory();

    useEffect(() => {
        dataFetch(`http://localhost:5000/blogs/${id}`, setBlog);   
    }, [id]);

    const HandleDelete = async() => {
        try{
            const response = await fetch(`http://localhost:5000/blogs/${id}`, {
                method: "DELETE"
            });
            if(response.ok){
                console.log("Blog deleted...");
                history.push("/");
            }
        }
        catch(err){
            console.log(err.message);
        }
    };

    return (
        <main>
            {blog && 
            <section className = "blog-section">
                <h2>{blog.title}</h2>
                <h6>{blog.author}</h6>
                <p>{blog.body}</p>
                <button onClick = {HandleDelete}>Delete Blog</button>
            </section>}     
        </main>
    );
}