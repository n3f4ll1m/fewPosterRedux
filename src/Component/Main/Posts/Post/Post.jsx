import "./Post.scss";
import { withRouter } from "react-router-dom";
function Post(props) {
  const postView = () => {
    props.history.push(`/posts/${props.index}`);
  };
  return (
    <div className="Post" onClick={postView}>
      <h2>{props.title}</h2>
      <div className="postDesc">{props.text}</div>
    </div>
  );
}

export default withRouter(Post);
