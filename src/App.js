import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CreateBlog from "./components/CreateBlog";
import DisplayBlog from "./components/DisplayBlog";
import NotFound from "./components/NotFound";
import {dataFetch} from "./components/dataFetch";
import EditBlog from "./components/EditBlog";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [error,setError] = useState(null);

  useEffect(() => {
    dataFetch("http://localhost:5000/blogs", setBlogs, setError);
  }, []);


  return (
    <Router basename = "blogs">
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/">
            {blogs && <Home />}
            {blogs && blogs.length === 0 && <div style = {{padding:"20px"}}>No blog to display ...</div>}
            {error && <NotFound />}
          </Route>
          <Route path = "/about" component = {About}/>
          <Route path = "/create" >
            <CreateBlog setBlogs = {setBlogs} setError = {setError}/>
          </Route> 
          <Route path = "/edit/:id">
            <EditBlog setBlogs = {setBlogs}/>
          </Route>
          <Route path = "/:id">
            <DisplayBlog setBlogs = {setBlogs}/>
          </Route>
          
          <Route path = "*" component = {NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
