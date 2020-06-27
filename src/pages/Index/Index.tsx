import React from "react";
import { Container, Header } from "semantic-ui-react";

import "./style.css";
import HomeMenu from "../../components/IndexMenu/IndexMenu";

const Index = () => (
  <div className="indexPage">
    <Container>
      <Header textAlign="center" size="huge">
        DiscussionForum
      </Header>
      <div>
        <HomeMenu />
      </div>
    </Container>
  </div>
);

export default Index;
