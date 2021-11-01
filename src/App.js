import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Create from "./components/Create";
import DisplayBlog from "./components/DisplayBlog";

function App() {
  const blogs = [
    {
      title: "Blog 1",
      author: "Sayantika Ghosh",
      body: "herhf iuheruh iuehrugh hrughuyr rughuyh huhhuh uguhu",
      id: 1
    },
    {
      title: "Blog 2",
      author: "Jhimli Ghosh",
      body: "kheijwfhue hewrvhre rughuyh huhhuh uguhu",
      id: 2
    },
    {
      title: "Blog 3",
      author: "Sumit Ghosh",
      body: "ejnrfj kjehgjreh jhegtrjh uguhu",
      id: 3
    }
  ];


  return (
    <Router basename = "blogs">
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Home blogs = {blogs} />
          </Route>
          <Route path = "/about" component = {About}/>
          <Route path = "/create" component = {Create}/> 
          <Route path = "/:id">
            <DisplayBlog blogs = {blogs} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
