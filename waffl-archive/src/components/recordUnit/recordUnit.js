import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 100%;
	padding: 3rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-family: 'PT Mono', monospace;

	.recordItem {
		display: flex;
		align-items: center;
	}

	span {
		color: #17b978;
		font-weight: bold;
		font-size: 1.2rem;
	}

	li {
		margin: 1rem auto;
	}

	img {
		max-height: 3rem;
		margin-left: 1rem;
	}

	ol {
		width: 100%;
	}

	p {
		padding: .25rem;
		margin: 0;
	}

	p:hover {
		background: #213642;
	}

	@media (max-width: 480px) {
	}
`;

const RecordUnit = ({ data, title }) => {
	const retrieveTeamLogoUrl = (string) => {
		let regexResult = string.match(/ ([^,]+),/g);
		let teamName = regexResult[1];
		let result = '';

		switch (teamName) {
			case 'Islanders':
				result = 'https://i.imgur.com/bDpjNeF.png';
				break;
			case 'Cartels':
				result = 'https://i.imgur.com/lIRYULG.png';
				break;
			case 'Wenches':
				result = 'https://i.imgur.com/qVAzfoj.png';
				break;
			case 'Digital Rays':
				result = 'https://i.imgur.com/Je5Chs0.png';
				break;
			case 'Chili Peppers':
				result = 'https://i.imgur.com/a9jFlAW.png';
				break;
			case 'Beer':
				result = 'https://i.imgur.com/aTs50El.png';
				break;
			case 'Not The Jets':
				result = 'https://i.imgur.com/q4j1M2D.png';
				break;
			case 'Toad Lickers':
				result = 'https://i.imgur.com/TpSQJZN.png';
				break;
			case 'Ice Babies':
				result = 'https://i.imgur.com/KE0cDMD.png';
				break;
			case 'Nadoes':
				result = 'https://i.imgur.com/lLmmaih.png';
				break;
			case 'Librarians':
				result = 'https://i.imgur.com/znuRXVw.png';
				break;
		}
		return result;
	};

	return (
		<Div>
			<h2>{title}</h2>
			<ol>
				{data.map((score) => {
					return (
						<li>
							<div className="recordItem">
								<p>
									{score.playerTeamDate} - <span className={score}>{score.score}</span>
									{retrieveTeamLogoUrl(score.playerTeamDate)}
								</p>
								<img src={retrieveTeamLogoUrl(score.playerTeamDate)} />
							</div>
						</li>
					);
				})}
			</ol>
		</Div>
	);
};

export default RecordUnit;
