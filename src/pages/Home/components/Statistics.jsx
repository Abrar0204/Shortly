import React from "react";
import styled from "styled-components";
import BrandIcon from "../../../assets/images/icon-brand-recognition.svg";
import DetailedIcon from "../../../assets/images/icon-detailed-records.svg";
import CustomaizableIcon from "../../../assets/images/icon-fully-customizable.svg";

const Container = styled.div`
	margin: 7rem 0rem;
	padding: 0rem 12rem;
	display: flex;
	flex-direction: column;
`;

const Heading = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	h1 {
		margin-bottom: 1rem;
	}
	p {
		width: 60%;
	}
`;

const CardGroup = styled.div`
	margin: 10rem 0rem;
	display: flex;
	align-items: center;
	position: relative;
`;
const BackgroundLine = styled.div`
	margin: 0rem 5rem;
	height: 1.2rem;
	width: 80%;
	background-color: ${props => props.theme.primaryColor1};
	position: absolute;
`;

const Card = styled.div`
	width: 100%;
	margin: 3rem;
	padding: 5rem;
	padding-top: 6rem;
	border-radius: 5px;
	background-color: white;
	position: relative;
	top: ${props => props.offset * 5 + "rem"};
	h3 {
		margin-bottom: 2rem;
	}
`;

const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.primaryColor2};
	border-radius: 50%;
	height: 7rem;
	width: 7rem;
	position: absolute;
	top: -3rem;
	img {
		height: 4rem;
		width: 4rem;
	}
`;

const Statistics = () => {
	return (
		<Container>
			<Heading>
				<h1> Advanced Statistics</h1>
				<p>
					Track how your links are performing across the web with our
					advanced statistics dashboard.
				</p>
			</Heading>
			<CardGroup>
				<BackgroundLine />
				<Card offset={0}>
					<Icon>
						<img src={BrandIcon} alt="Branded" />
					</Icon>
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic
						links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</Card>
				<Card offset={1}>
					<Icon>
						<img src={DetailedIcon} alt="Detailed" />
					</Icon>

					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</Card>
				<Card offset={2}>
					<Icon>
						<img src={CustomaizableIcon} alt="Customaizable" />
					</Icon>

					<h3>Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</Card>
			</CardGroup>
		</Container>
	);
};

export default Statistics;