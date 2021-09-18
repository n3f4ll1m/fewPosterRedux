import "./Main.scss";
import PostDetails from "./Posts/PostDetails/PostDetails";
import Posts from "./Posts/Posts";
import Login from "./Login/Login";
import RegForm from "./RegForm/RegForm";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import { Route, Switch } from "react-router-dom";
import Profile from "./Profile/Profile";

function Main(props) {
  return (
    <section className="Main">
      <div className="Container">
        <Switch>
          <Route path="/" exact>
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <RegForm />
          </Route>
          <Route path="/contacts">
            <Contacts isLogedIn={props.isLogedIn} />
          </Route>
          <Route path="/about">
            <About isLogedIn={props.isLogedIn} />
          </Route>
          <Route path="/posts/:index" exact component={PostDetails} />
          <Route path="/posts">
            <Posts />
          </Route>

          <Route>
            <h2>Error 404</h2>
            <div className="postDesc">This URL is invalid.</div>
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Main;
