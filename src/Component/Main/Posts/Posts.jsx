import "./Posts.scss";
import Post from "./Post/Post";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import verify from "../../../verify";
import { fetchData } from "../../../store/actions/action";
function Posts(props) {
  const respData = useSelector((state) => state.post.respData);
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const history = useHistory();
  verify(history, isLogedIn);
  // props.fetchPosts();
  //console.log(props);
  useEffect(() => {
    props.fetchPosts();
  });

  return (
    <div className="Posts">
      {respData.map((item, index) => {
        return (
          <Post
            title={item.title}
            text={item.body + "   ..."}
            key={item.id}
            index={index}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    respData: state.respData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
