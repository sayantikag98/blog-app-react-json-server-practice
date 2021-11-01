import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav>
            <div id = "title-div">
                <h2>Blog App</h2>
            </div>
            <div id = "link-div">
                <Link className = "home-link" to = "/">Home</Link>
                <Link className = "about-link" to = "/about">About</Link>
                <Link className = "create-link" to = "/create">Create</Link>
            </div>
        </nav>
    );
}