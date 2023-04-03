import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserList from "./UserList";

const PostList = (props) => {
    useEffect(() => {
        props.fetchPostsAndUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderList = () => {
        return props.posts.map((post) => (
            <div key={post.id} className="item">
                <i className="large middle aligned user icon"></i>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                    </div>
                    <p>{post.body}</p>
                    <UserList userId={post.userId} />
                </div>
            </div>
        ));
    };

    if (!props.posts) {
        return null;
    }
    return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
