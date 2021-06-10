import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import shortenBG from "../../../assets/images/bg-shorten-desktop.svg";

const Container = styled.div`
	margin: 5rem 0rem;
	padding: 0rem 12rem;
	position: relative;
	top: -12rem;
`;

const FormContainer = styled.div`
	background-color: ${props => props.theme.primaryColor2};
	background-image: url(${shortenBG});
	background-size: cover;
	border-radius: 10px;
	padding: 6rem 5rem;
	position: relative;
`;

const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

const Input = styled.input`
	padding: 1.8rem 1.5rem;
	height: 100%;
	width: 80%;
	border-radius: 5px;
	border: none;
	outline: none;
	&:focus {
		border: none;
		outline: none;
	}
`;

const Error = styled.p`
	color: ${props => props.theme.secondaryColor};
	font-size: 1.4rem;
	font-style: italic;
	position: absolute;
	bottom: 3rem;
	left: 5rem;
`;

const ShortenButton = styled(Button)`
	padding: 1.8rem 1.5rem;
	width: 18%;
	margin: 0;
`;

const Urls = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	margin: 3rem 0rem;
	padding: 2rem 3rem;
	background-color: white;
	border-radius: 5px;
`;

const FullUrl = styled.h4`
	font-size: 2rem;
	width: 50%;
`;
const ShortContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const ShortUrl = styled.p`
	margin: 0rem 2rem;
	color: ${props => props.theme.primaryColor1};
`;
const CopyButton = styled(Button)`
	background-color: ${props =>
		props.copied ? props.theme.primaryColor2 : props.theme.primaryColor1};
	&:hover {
		cursor: ${props => (props.copied ? "default" : "pointer")};
		background-color: ${props =>
			props.copied
				? props.theme.primaryColor2
				: props.theme.primaryLightColor};
	}
`;

const UrlShortener = () => {
	const [url, setUrl] = useState("");
	const [shortenUrls, setShortenUrls] = useState([
		{
			full: "https://abrarhasan.me",
			short: "https://shrtco.de/qJyTeK",
			copied: false,
		},
	]);
	const [err, setErr] = useState("");

	const handleInput = e => {
		const { value } = e.target;
		setUrl(value);
	};

	const shortenUrl = async ev => {
		ev.preventDefault();
		try {
			if (url === "") {
				return setErr("Please add a link.");
			}
			const res = await fetch(
				`https://api.shrtco.de/v2/shorten?url=${url}`
			);
			const data = await res.json();
			setShortenUrls(prev => [
				...prev,
				{
					full: data.result.original_link,
					short: data.result.full_short_link,
					copied: false,
				},
			]);
		} catch (err) {
			setErr("Something went wrong try again.");
			console.error(err);
		}
	};

	const copyUrl = async shortUrl => {
		try {
			await navigator.clipboard.writeText(shortUrl);
			setShortenUrls(prev =>
				prev.map(url =>
					url.short === shortUrl ? { ...url, copied: true } : url
				)
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<FormContainer>
				<Form onSubmit={shortenUrl}>
					<Input
						value={url}
						onChange={handleInput}
						name="url"
						placeholder="Shorten a link here ..."
					></Input>
					<ShortenButton filled type="submit">
						Shorten It!
					</ShortenButton>
				</Form>
				{err && <Error>{err}</Error>}
			</FormContainer>

			{shortenUrls.map(url => (
				<Urls key={url.short}>
					<FullUrl>{url.full}</FullUrl>
					<ShortContainer>
						<ShortUrl>{url.short}</ShortUrl>
						<CopyButton
							copied={url.copied}
							onClick={
								url.copied ? null : () => copyUrl(url.short)
							}
						>
							{url.copied ? "Copied" : "Copy"}
						</CopyButton>
					</ShortContainer>
				</Urls>
			))}
		</Container>
	);
};

export default UrlShortener;
