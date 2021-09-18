import "./PostDetails.scss";
import { useHistory, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOne } from "../../../../store/actions/action";
import verify from "../../../../verify";
function PostDetails(props) {
  const dispatch = useDispatch();
  const index = +props.match.params.index + 1;
  const respData = useSelector((state) => state.post.respDataOne);
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const history = useHistory();
  verify(history, isLogedIn);
  //let [data, setData] = useState({});

  dispatch(fetchOne(index));

  //console.log("DATA", respData);
  useEffect(() => {});

  return (
    <div className="PostDetails">
      <h2>{respData.title}</h2>
      <div className="postDesc">{respData.body}</div>
      <div className="postDesc">{respData.body}</div>
      <div className="postDesc">{respData.body}</div>
    </div>
  );
}
export default withRouter(PostDetails);
