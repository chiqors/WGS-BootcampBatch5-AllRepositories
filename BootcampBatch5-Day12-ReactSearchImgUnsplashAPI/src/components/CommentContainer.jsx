import React, { Component } from 'react'
// import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";
import { Comment } from "semantic-ui-react";
import Counting from './Counting';

export default class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.likes,
        };
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <Comment.Group>
                <Comment>
                    <Comment.Avatar as="a" src={this.props.avatar} />
                    <Comment.Content>
                    <div className="d-flex flex">
                        <Comment.Author>{this.props.name}</Comment.Author>
                        <div className="ml-5">
                        <Comment.Metadata>
                            <div>{this.props.time} | Liked: {this.state.count}</div>
                        </Comment.Metadata>
                        </div>
                    </div>
                    <Comment.Text>{this.props.comment}</Comment.Text>
                    </Comment.Content>
                    <Counting parentClickLike={this.clickHandler} />
                </Comment>
            </Comment.Group>
        )
    }
}
