import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 35vw;
	padding: 1rem;

	span {
		color: orange;
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
