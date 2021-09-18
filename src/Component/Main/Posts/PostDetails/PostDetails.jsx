import "./PostDetails.scss";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import verify from "../../../../verify";
import { fetchOne } from "../../../../store/actions/action";
function PostDetails(props) {
  const index = +props.match.params.index + 1;
  const respData = useSelector((state) => state.post.respDataOne);
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  verify(history, isLogedIn);
  useEffect(() => dispatch(fetchOne(index)), []);

  return (
    <div className="PostDetails">
      <h2>{respData.title}</h2>
      <div className="postDesc">{respData.body}</div>
      <div className="postDesc">{respData.body}</div>
      <div className="postDesc">{respData.body}</div>
    </div>
  );
}
export default PostDetails;
