import React from "react";
import { Dimmer, Loader, Header, Button, Icon } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

import "./style.css";
import MenuBar from "../../components/General/MenuBar";
import { FETCH_POSTS } from "../../utils/mutations";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS);
  return (
    <div className="homePage">
      <MenuBar />
      <div className="postsContainer">
        <Header className="mainHeader">Recent Posts</Header>
        <Dimmer active={loading} inverted>
          <Loader size="large" inverted content="Fetching Posts" />
        </Dimmer>
        <Button as={Link} to="/createPost" fluid>
          <Icon className="add"></Icon>Create new post
        </Button>
        {data && data.getPosts.length > 0 ? (
          data.getPosts.map((post: any) => <Posts key={post.id} {...post} />)
        ) : (
          <h4 className="noData">No recent posts available.</h4>
        )}
      </div>
    </div>
  );
};

export default Home;
