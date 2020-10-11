import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

export interface CommentStructure {
  id: string;
  username: string;
  body: string;
  createdAt: string;
}
const Comments = (comment: CommentStructure) => {
  return (
    <Comment key={comment.id}>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{comment.username}</Comment.Author>
        <Comment.Metadata>
          <div>{moment(comment.createdAt).fromNow()}</div>
        </Comment.Metadata>
        <Comment.Text>{comment.body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Comments;
