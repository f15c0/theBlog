
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Create from "./Create";
import BlogDetails from './BlogDetails';
import NotFound from './404';
import Category from './Category';

function App() {
  // const likes = 150;
  // const username = "Dennis fisco";
  // const site = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/create">
               <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/category">
              <Category/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
