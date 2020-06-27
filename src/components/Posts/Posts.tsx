import React from "react";
import { Card, Button, Image, Header, Comment } from "semantic-ui-react";
import moment from "moment";

import "./style.css";

const Posts = (post: any, key: any) => {
  const postData = post.post;
  return (
    <Card key={key} fluid>
      <Card.Content>
        <Image
          floated="left"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        />
        <Card.Header style={{ fontSize: "1.1rem" }}>
          {postData.username}
        </Card.Header>
        <Card.Meta>{moment(postData.createdAt).fromNow()}</Card.Meta>
        <Card.Description style={{ fontSize: "1.3rem" }}>
          {postData.body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            icon="heart"
            label={{
              basic: true,
              pointing: "left",
              content: postData.likeCount,
            }}
          />
          <Button
            icon="comments"
            label={{
              basic: true,
              content: postData.commentCount,
            }}
          />
        </div>
      </Card.Content>
      <Card.Content extra>
        {postData.commentCount > 0 ? (
          postData.commentCount < 3 ? (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {postData.comments.map((comment: any) => (
                <Comment key={comment.id}>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">{comment.username}</Comment.Author>
                    <Comment.Metadata>
                      <div>{moment(comment.createdAt).fromNow()}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
            </Comment.Group>
          ) : (
            <Comment.Group>
              <Header as="h3" dividing>
                Comments
              </Header>
              {postData.comments.splice(0, 2).map((comment: any) => (
                <Comment key={comment.id}>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">{comment.username}</Comment.Author>
                    <Comment.Metadata>
                      <div>{moment(comment.createdAt).fromNow()}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.body}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
              <a href="/home">
                View {postData.commentCount - 2} more comments.
              </a>
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
