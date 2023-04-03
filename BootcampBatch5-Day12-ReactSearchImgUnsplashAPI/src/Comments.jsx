import React, { Component } from 'react'
import CommentContainer from './components/CommentContainer';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        return this.props.data.map((comment, index) => (
            <div className="commentContainer" key={index}>
                <CommentContainer
                    avatar={comment.avatar}
                    name={comment.name}
                    time={comment.time}
                    comment={comment.comment}
                    likes={comment.likes}
                />
            </div>
        ));
    }
}