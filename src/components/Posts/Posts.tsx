import React from "react";
import { Card, Button, Header, Comment, Icon } from "semantic-ui-react";
import moment from "moment";

import "./style.css";
import Comments, { CommentStructure } from "../Comments/Comments";

const Posts = (post: any, key: any) => {
  const likePost = () => {
    console.log("Post liked");
  };
  const commentOnPost = () => {
    console.log("Post Commented");
  };
  return (
    <Card key={key} fluid>
      <Card.Content>
        {/* Commenting out the report button for now, no functionality implemented for it yet. */}
        {/* <Icon className="flag report" /> */}
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>
          <Icon className="user" />
          {post.username}
          &nbsp; {"\u007c"} &nbsp;
          <Icon className="clock" />
          &nbsp;
          {moment(post.createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{post.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            icon="like"
            label={{
              basic: true,
              content: post.likeCount,
            }}
            basic
            onClick={likePost}
          />
          <Button
            icon="comments"
            label={{
              basic: true,
              content: post.commentCount,
            }}
            basic
            onClick={commentOnPost}
          />
        </div>
      </Card.Content>
      <Card.Content extra>
        {post.commentCount > 0 ? (
          post.commentCount < 3 ? (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {post.comments.map((comment: CommentStructure) => (
                <Comments {...comment} key={comment.id} />
              ))}
            </Comment.Group>
          ) : (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {post.comments.splice(0, 2).map((comment: CommentStructure) => (
                <Comments {...comment} />
              ))}
              <a href="/home">View {post.commentCount - 2} more comments.</a>
            </Comment.Group>
          )
        ) : (
          <h4>No comments</h4>
        )}
      </Card.Content>
    </Card>
  );
};

export default Posts;
