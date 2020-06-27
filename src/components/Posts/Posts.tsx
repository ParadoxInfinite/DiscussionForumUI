import React from "react";
import { Card, Button, Header, Comment, Icon } from "semantic-ui-react";
import moment from "moment";

import "./style.css";
import Comments from "../Comments/Comments";

const Posts = (post: any, key: any) => {
  return (
    <Card key={key} fluid>
      <Card.Content>
        <Icon className="flag report" />
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
            icon="heart"
            label={{
              basic: true,
              pointing: "left",
              content: post.likeCount,
            }}
          />
          <Button
            icon="comments"
            label={{
              basic: true,
              content: post.commentCount,
            }}
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
              {post.comments.map((comment: any) => (
                <Comments {...comment} />
              ))}
            </Comment.Group>
          ) : (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {post.comments.splice(0, 2).map((comment: any) => (
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
