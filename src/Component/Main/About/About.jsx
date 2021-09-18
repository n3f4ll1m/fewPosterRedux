import "./About.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import verify from "../../../verify";
function About(props) {
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const history = useHistory();
  verify(history, isLogedIn);
  return (
    <div className="About">
      <h2>About</h2>
      <div className="postDesc">
        This project created by React js for education.
      </div>
    </div>
  );
}

export default About;
