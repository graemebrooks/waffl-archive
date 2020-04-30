import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 70vw;
	display: flex;
	flex-direction: column;
	background: #2d4059;
	padding: 1rem;

	img {
		max-width: 30rem;
		max-height: 30rem;
		margin: 5rem auto;
	}

	li {
		margin: 3rem auto;
	}
`;

const awardUnit = ({ data, title, imageUrl }) => {
	return (
		<Div>
			<h2>{title}</h2>
			<img src={imageUrl} alt="WAFFL Champion" />
			<ul>
				{data.map((award) => {
					return (
						<li>
							<h3>
								{award.year} - {award.team}
							</h3>
							<p>{award.content}</p>
						</li>
					);
				})}
			</ul>
		</Div>
	);
};

export default awardUnit;
