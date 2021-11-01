import { Link } from "react-router-dom";

export default function Home({blogs}){
    return (
        <main id = "home-main">
            {blogs.map(blog => 
            <Link to = {`/${blog.id}`} key = {blog.id}>
                <section className = "blog-section">
                    <h2>{blog.title}</h2>
                    <h6>{blog.author}</h6>
                    <p>{blog.body}</p>
                </section>
            </Link>)}
        </main>
    );
}