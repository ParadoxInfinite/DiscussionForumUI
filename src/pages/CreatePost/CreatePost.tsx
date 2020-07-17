import React from "react";
import MenuBar from "../../components/General/MenuBar";
import { Form, Header, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";

import "./style.css";
import { useForm } from "../../utils/hooks";
import { CREATE_POST, FETCH_POSTS } from "../../utils/mutations";

const CreatePost = () => {
  const { onChange, onSubmit, values } = useForm(createPostCallback, {
    title: "",
    body: "",
  });
  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    variables: values,
    update(proxy, result) {
      var posts: any = proxy.readQuery({
        query: FETCH_POSTS,
      });
      posts.getPosts = [result.data.createPost, ...posts.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS, data: posts });
      values.title = "";
      values.body = "";
    },
  });
  function createPostCallback() {
    createPost();
  }
  return (
    <div className="createPage">
      <MenuBar />
      <div className="createPostContainer">
        <Header className="mainHeader">Create new post</Header>
        <Form onSubmit={onSubmit} loading={loading}>
          <Form.Input
            name="title"
            fluid
            label="Title"
            required
            onChange={onChange}
            value={values.title}
            error={error ? true : false}
          />
          <Form.Field
            label="Body"
            name="body"
            control={Form.TextArea}
            fluid="true"
            required
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button className="submitButton" fluid>
            Create!
          </Button>
        </Form>
        {error && (
          <div className="ui error message">
            <ul className="list">
              <li>{error.graphQLErrors[0].message}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreatePost;
