import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

const Comments = (comment: any) => {
  return (
    <Comment key={comment.id}>
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
