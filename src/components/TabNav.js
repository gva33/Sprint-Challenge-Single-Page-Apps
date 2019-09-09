import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
// TODO: Add missing tabs below

const NavContainer = styled.div `
  display: flex; 
  justify-content: center;
  width: 100%;

`;
export default function TabNav() {
    return (
        <Menu >
            <NavContainer>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/characters">Characters</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/locations">Locations</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/episodes">Episodes</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/search">Search</NavLink>
                </Menu.Item>
            </NavContainer>
        </Menu>
    )
};
