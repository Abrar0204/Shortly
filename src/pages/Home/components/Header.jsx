import React from "react";
import styled from "styled-components";
import headerImageSrc from "../../../assets/images/illustration-working.svg";

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	padding: 0rem 14rem;
	position: relative;
`;

const MainContent = styled.div`
	margin: 10rem 0rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

const HeaderImg = styled.img`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: -12rem;
`;

const Heading = styled.h1`
	font-size: 8rem;
	width: 50%;
	line-height: 1.2;
`;

const Description = styled.p`
	font-size: 2.4rem;
	width: 50%;
`;

const Button = styled.button`
	color: ${props => (props.filled ? "#fff" : props.theme.primaryColor1)};
	background-color: ${props =>
		props.filled ? props.theme.primaryColor1 : "transparent"};
	padding: 1.5rem 4rem;
	margin: 3rem 0rem;
	font-weight: 500;
	font-size: 2.4rem;
	border-radius: ${props => (props.pill ? "1000px" : "10px")};
	&:hover {
		cursor: pointer;
		background-color: ${props =>
			props.filled ? props.theme.primaryLightColor : "transparent"};
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<MainContent>
				<Heading>More than just shorter links</Heading>
				<Description>
					Build your brand’s recognition and get detailed insights on
					how your links are performing.
				</Description>
				<Button filled large pill>
					Get Started
				</Button>
			</MainContent>
			<HeaderImg src={headerImageSrc} alt="header-working"></HeaderImg>
		</HeaderContainer>
	);
};

export default Header;
