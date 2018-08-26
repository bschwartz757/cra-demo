import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark fixed="top" expand="md">
        <NavbarBrand href="/">Logo Here</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                <FontAwesomeIcon
                  icon={['fas', 'home']}
                  size="lg"
                  className="mr-2"
                />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                <FontAwesomeIcon
                  icon={['fas', 'user-tie']}
                  size="lg"
                  className="mr-2"
                />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/data">
                <FontAwesomeIcon
                  icon={['fas', 'database']}
                  size="lg"
                  className="mr-2"
                />
                Data
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/test">
                <FontAwesomeIcon
                  icon={['fas', 'vial']}
                  size="lg"
                  className="mr-2"
                />
                Test
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <FontAwesomeIcon
                  icon={['fas', 'caret-down']}
                  size="lg"
                  className="mr-2"
                />
                Dropdown Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Option</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
