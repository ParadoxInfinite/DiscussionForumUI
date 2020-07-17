import React, { useState, useContext } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

import history from "../../utils/history";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);

  const [activeItem, setActiveItem] = useState<string>(
    window.location.pathname.substring(1)
  );
  let username: any = "";
  if (user !== null) {
    username = user;
    username = username.username;
  } else {
    history.push("/");
  }
  const handleItemClick = (_e: any, { name }: MenuItemProps) => {
    history.push(`${name}`);
    setActiveItem(name!.toString());
  };

  return (
    <Menu pointing secondary stackable size="huge">
      <Menu.Menu position="left">
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
        <Menu.Item
          name={username}
          as={Link}
          to={"/home"}
          style={{ fontWeight: "bold" }}
        />
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
