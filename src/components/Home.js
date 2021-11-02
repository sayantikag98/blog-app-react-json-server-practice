import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

export default function Home(){
    const [blogs, setBlogs] = useState(null);
    const [search, setSearch] = useState("");
    const [searchBlogs, setSearchBlogs] = useState(null);
    const [matchFound, setMatchFound] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs`)
        .then(response => response.json())
        .then(data => {
            setBlogs(data);
            setSearchBlogs(data);
        })
        .catch(err => {
            console.log(err);
        });     
    }, []);

    const HandleChange = (event) => {
        setSearch(event.target.value);
        if(event.target.value === ""){
            setSearchBlogs(blogs);
            setMatchFound(true);
        }
        else{
            const searchedBlogs = blogs.filter(blog => blog.title.startsWith(event.target.value));
            if(searchedBlogs.length === 0 && blogs.length > 0)
                setMatchFound(false);
            else 
                setMatchFound(true);
            setSearchBlogs(searchedBlogs);
        }
    };

    return (
        <main id = "home-main">
            <section id = "search-section">
                <input id = "search-blog" placeholder = "Search the blog here" autoFocus value = {search} onChange = {HandleChange}/>
                <span id = "search-icon" className="material-icons">search</span>
            </section>
            {searchBlogs && !matchFound && <section style = {{padding: "20px"}}>No such blog exists</section>}
            {searchBlogs && searchBlogs.map(blog => 
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