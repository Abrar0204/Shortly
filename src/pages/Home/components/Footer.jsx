import React from "react";
import FacebookIcon from "../../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../../assets/images/icon-pinterest.svg";
import InstagramIcon from "../../../assets/images/icon-instagram.svg";
import GetStartedBG from "../../../assets/images/bg-boost-desktop.svg";
import styled from "styled-components";
import Button from "../../../components/Button";

const GetStarted = styled.div`
	background-color: ${props => props.theme.primaryColor2};
	background-image: url(${GetStartedBG});
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8rem 0rem;
	h1 {
		color: white;
		margin-bottom: 2rem;
	}
`;

const FooterNav = styled.div`
	background-color: ${props => props.theme.neutralColor4};
	padding: 7rem 14rem;
	display: flex;
`;
const Logo = styled.div`
	width: 30%;
	h1 {
		color: white;
	}
`;
const FooterNavListContainer = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-evenly;
`;
const FooterNavList = styled.div`
	h5 {
		color: white;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.6rem;
		margin-bottom: 0.5rem;
		&:hover {
			cursor: pointer;
		}
	}
`;
const IconGroup = styled.div`
	img {
		margin: 0rem 1rem;
		&:hover {
			cursor: pointer;
		}
	}
`;

const Footer = () => {
	return (
		<footer>
			<GetStarted>
				<h1>Boost your links today</h1>
				<Button pill>Get Started</Button>
			</GetStarted>
			<FooterNav>
				<Logo>
					<h1>Shortly</h1>
				</Logo>
				<FooterNavListContainer>
					<FooterNavList>
						<h5>Features</h5>
						<p>Link Shortening</p>
						<p>Branded</p>
						<p>Links</p>
						<p>Analytics</p>
					</FooterNavList>
					<FooterNavList>
						<h5>Resources</h5>
						<p>Blog</p>
						<p>Developers</p>
						<p>Support</p>
					</FooterNavList>
					<FooterNavList>
						<h5>Company</h5>
						<p>About</p>
						<p>Our Team</p>
						<p>Careers</p>
						<p>Contact</p>
					</FooterNavList>
					<IconGroup>
						<img src={FacebookIcon} alt="Facebook" />
						<img src={TwitterIcon} alt="Twitter" />
						<img src={PinterestIcon} alt="Pinterest" />
						<img src={InstagramIcon} alt="Instagram" />
					</IconGroup>
				</FooterNavListContainer>
			</FooterNav>
		</footer>
	);
};

export default Footer;
