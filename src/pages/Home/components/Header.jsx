import React from "react";
import styled from "styled-components";
import headerImageSrc from "../../../assets/images/illustration-working.svg";
import Button from "../../../components/Button";

const Container = styled.header`
	display: flex;
	align-items: center;
	padding: 0rem 14rem 14rem 14rem;

	position: relative;
	background-color: white;
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
	top: 40%;
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

const Header = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default Header;
