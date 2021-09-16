import "./Posts.scss";
import { Redirect } from "react-router-dom";
import Post from "./Post/Post";
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import fetchPosts from "../../../store/actions/Post";

function Posts(props) {
  const respData = [];
  useEffect(() => {
    //props.fetchPosts();
  });

  return (
    <div className="Posts">
      {!props.isLogedIn ? (
        <Redirect from="/posts" to="/login" />
      ) : (
        <Redirect from="/posts" to="/posts" />
      )}

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
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
