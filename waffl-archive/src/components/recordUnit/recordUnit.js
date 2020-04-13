import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 35vw;
	padding: 1rem;
	border: 1px solid orange;

	span {
		color: orange;
	}
`;

const RecordUnit = ({ data, title }) => {
	return (
		<Div>
			<h3>{title}</h3>
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
