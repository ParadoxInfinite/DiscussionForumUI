import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

const Home = () => (
  <Segment placeholder color="black" className="custom-segment">
    <Grid columns={2} relaxed="very" stackable>
      <Divider vertical></Divider>
      <Grid.Column>
        <Form>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            placeholder="Username"
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            label="Password"
            type="password"
          />

          <Button content="Login" primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <Button content="Register" icon="signup" size="big" />
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Home;
