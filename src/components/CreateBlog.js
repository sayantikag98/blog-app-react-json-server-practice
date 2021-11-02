import {useState} from "react";
import { useHistory } from "react-router";

import { dataFetch } from "./dataFetch";

export default function CreateBlog({setBlogs, setError}){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    let history = useHistory();

    const HandleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const HandleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const HandleChangeBody = (event) => {
        setBody(event.target.value);
    };

    const HandleSubmit = async (event) => {
        try{
            event.preventDefault();
            const response = await fetch("http://localhost:5000/blogs", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({title, author, body})
            });
            if(response.ok){
                console.log("New blog added...");
                dataFetch("http://localhost:5000/blogs", setBlogs, setError);
                history.push("/");
            }
        }
        catch(err){
            setError(err.message);
        }   
    };



    return (
        <main id = "create-main">
            <section id = "create-section">
                <form id = "create-form" onSubmit = {HandleSubmit}>
                    <label htmlFor = "title">
                        Title
                    </label>
                    <input id = "title" required autoFocus value = {title} onChange = {HandleChangeTitle}/>
                    <label htmlFor = "author">
                        Author
                    </label>
                    <input id = "author" required value = {author} onChange = {HandleChangeAuthor}/>
                    <label htmlFor = "body">Body</label>
                    <textarea id = "body" required value = {body} onChange = {HandleChangeBody}></textarea>
                    <button id = "submit-btn">Submit</button>
                </form>
            </section>
        </main>
    );
}