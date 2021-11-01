import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function DisplayBlog({blogs}){
    const {id} = useParams();  // id is a string 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        setBlog (blogs.find(blog => blog.id === Number(id)));
    }, [blogs, id, blog]);

    return (
        <main>
            {blog && 
            <section className = "blog-section">
                <h2>{blog.title}</h2>
                <h6>{blog.author}</h6>
                <p>{blog.body}</p>
                <button>Delete Blog</button>
            </section>}     
        </main>
    );
}