import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Nav = styled.nav`
	padding: 0rem 10rem;
	height: 12vh;
	display: flex;
	align-items: center;
	background-color: white;
`;

const NavGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.h1`
	margin: 0rem 2rem;
	color: ${props => props.theme.neutralColor3};
	font-size: 3rem;
`;

const NavItemList = styled.div`
	display: flex;
	align-items: center;
`;
const NavItem = styled.div`
	font-size: 1.6rem;
	margin: 0rem 3rem;
	color: ${props => props.theme.neutralColor2};
	font-weight: 500;
	&:hover {
		color: ${props => props.theme.neutralColor3};
		cursor: pointer;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Logo>Shortly</Logo>
			<NavGroup>
				<NavItemList>
					<NavItem>Features</NavItem>
					<NavItem>Pricing</NavItem>
					<NavItem>Resources</NavItem>
				</NavItemList>
				<NavItemList>
					<Button text>Login</Button>
					<Button pill>Sign Up</Button>
				</NavItemList>
			</NavGroup>
		</Nav>
	);
};

export default Navbar;
