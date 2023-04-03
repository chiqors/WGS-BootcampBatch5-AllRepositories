import React from "react";
// eslint-disable-next-line no-undef
import { Comment } from "semantic-ui-react";

const CommentComp = (props) => {
    return (
        <Comment>
            <Comment.Avatar src={props.data.photo_url} />
            <Comment.Content>
                <Comment.Author as='a'>{props.data.author}</Comment.Author>
                <Comment.Metadata>
                    <div>{props.data.time}</div>
                </Comment.Metadata>
                    <Comment.Text>{props.data.text}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    );
};

export default CommentComp;