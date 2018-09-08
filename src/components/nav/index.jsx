import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default () => (
  <Menu className="main-menu">
    <Menu.Item as={ Link } to="/">Home</Menu.Item>
    <Menu.Item as={ Link } to="/about">About</Menu.Item>
    <Menu.Item disabled>Favorite Places</Menu.Item>
  </Menu>
);
