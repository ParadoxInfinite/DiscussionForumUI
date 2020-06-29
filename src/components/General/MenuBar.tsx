import React, { useState, useContext } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

import history from "../../utils/history";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  let username: any;
  if (user !== null) {
    username = user;
    username = username.username;
  } else {
    history.push("/");
  }
  const [activeItem, setActiveItem] = useState<string>(
    window.location.pathname.substring(1)
  );

  const handleItemClick = (_e: any, { name }: MenuItemProps) => {
    setActiveItem(name!.toString());
  };

  return (
    <Menu pointing secondary stackable size="huge">
      <Menu.Menu>
        <Menu.Item
          name="home"
          onClick={handleItemClick}
          active={activeItem === "home"}
        />
        <Menu.Item
          name="messages"
          onClick={handleItemClick}
          active={activeItem === "messages"}
        />
        <Menu.Item
          name="friends"
          onClick={handleItemClick}
          active={activeItem === "friends"}
        />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item name={username} as={Link} to={"/home"} active />
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
