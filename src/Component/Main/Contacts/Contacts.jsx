import "./Contacts.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import verify from "../../../verify";
function Contacts(props) {
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const history = useHistory();
  verify(history, isLogedIn);
  return (
    <div className="Contacts">
      <h2>This is my contacts</h2>
      <div className="postDesc">
        <p>
          <span>Name Surname: </span>Gevorg Kirakosyan
        </p>
        <p>
          <span>Email: </span>kirakosyangev@yahoo.com
        </p>
        <p>
          <span>Phone: </span>091725853
        </p>
        <a href="https://github.com/n3f4ll1m">
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
