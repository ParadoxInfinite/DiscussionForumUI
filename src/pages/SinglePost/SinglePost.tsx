import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  Dimmer,
  Loader,
  Card,
  Button,
  Icon,
  Header,
  Comment,
  Form,
} from "semantic-ui-react";
import moment from "moment";

import { FETCH_SINGLE_POST } from "../../utils/mutations";
import MenuBar from "../../components/General/MenuBar";
import LikeButton from "../../components/Posts/LikeButton";
import { AuthContext, User } from "../../context/auth";
import Comments, { CommentStructure } from "../../components/Comments/Comments";

import "./style.css";

const SinglePost = (props: any) => {
  const { user } = useContext(AuthContext);
  let username: string = "";
  if (user) {
    const tempUser: User = user!;
    username = tempUser.username;
  }
  const postId = props.match.params.postId;
  const { loading, data } = useQuery(FETCH_SINGLE_POST, {
    variables: {
      postId,
    },
  });
  let post: any = undefined;
  if (!loading) {
    post = data.getPost;
  }
  return (
    <div className="homePage">
      <MenuBar />
      <div className="postsContainer">
        <Dimmer active={loading} inverted>
          <Loader size="large" inverted content="Fetching Post" />
        </Dimmer>
        {post && post !== undefined && (
          <Card fluid>
            <Card.Content>
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
              <div className="ui three buttons">
                <LikeButton
                  user={user}
                  post={{
                    id: post.id,
                    likeCount: post.likeCount,
                    likes: post.likes,
                  }}
                />
                <Button
                  icon="comments"
                  label={{
                    basic: true,
                    content: post.commentCount,
                  }}
                  basic
                />
              </div>
            </Card.Content>
            <Card.Content extra>
              <Form>
                <Form.TextArea rows={2} placeholder={"Write a comment..."} />
                <Button
                  content="Comment"
                  labelPosition="right"
                  icon="comment"
                  basic
                />
              </Form>
              {post.commentCount > 0 ? (
                <Comment.Group>
                  <Header as="h4" dividing>
                    Comments
                  </Header>
                  {post.comments.map((comment: CommentStructure) => (
                    <Comments {...comment} key={comment.id} />
                  ))}
                </Comment.Group>
              ) : (
                <h4>No comments</h4>
              )}
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
