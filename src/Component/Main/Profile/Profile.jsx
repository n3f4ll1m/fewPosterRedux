import "./Profile.scss";
import { Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";

function Profile(props) {
  const isLogedIn = useSelector((state) => state.login.errorText);
  console.log(isLogedIn);
  return (
    <div className="Profile">
      {!isLogedIn ? (
        <Redirect from="/" to="/login" />
      ) : (
        <Redirect from="/" to="/" />
      )}

      <div className="avatar">
        <img
          src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png"
          alt=""
        />
      </div>
      <div className="profDesc">
        <h2>Name Surname</h2>
        <p>
          <span>Birthdate: </span>01.01.2000
        </p>
        <p>
          <span>Email: </span>name.surname@mail.com
        </p>
        <p>
          <span>Phone: </span>000000000
        </p>
      </div>
    </div>
  );
}

export default connect()(Profile);
