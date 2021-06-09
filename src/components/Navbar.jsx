import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
	padding: 0rem 10rem;
	height: 12vh;
	display: flex;
	align-items: center;
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

const NavButton = styled.button`
	color: ${props => (props.filled ? "#fff" : props.theme.primaryColor1)};
	background-color: ${props =>
		props.filled ? props.theme.primaryColor1 : "transparent"};
	padding: 1rem 2.5rem;
	margin: 0rem 1rem;
	font-weight: 500;
	font-size: 1.8rem;
	border-radius: ${props => (props.pill ? "1000px" : "10px")};
	&:hover {
		cursor: pointer;
		background-color: ${props =>
			props.filled ? props.theme.primaryLightColor : "transparent"};
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
					<NavButton>Login</NavButton>
					<NavButton filled pill>
						Sign Up
					</NavButton>
				</NavItemList>
			</NavGroup>
		</Nav>
	);
};

export default Navbar;
