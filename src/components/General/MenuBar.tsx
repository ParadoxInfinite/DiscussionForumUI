import React from "react";
import { Menu } from "semantic-ui-react";

const MenuBar = () => {
  return (
    <Menu pointing secondary stackable size="huge">
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
      <Menu.Menu position="right">
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
