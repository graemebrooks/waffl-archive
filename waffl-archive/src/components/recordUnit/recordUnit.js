import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 50vw;
	padding: 1rem;

	font-family: 'PT Mono', monospace;

	span {
		color: #17b978;
		font-weight: bold;
		font-size: 1.2rem;
	}

	p {
		padding: .25rem;
	}

	p:hover {
		background: #213642;
	}
`;

const RecordUnit = ({ data, title }) => {
	return (
		<Div>
			<h2>{title}</h2>
			<ol>
				{data.map((score) => {
					return (
						<li>
							<p>
								{score.playerTeamDate} - <span className={score}>{score.score}</span>
							</p>
						</li>
					);
				})}
			</ol>
		</Div>
	);
};

export default RecordUnit;
