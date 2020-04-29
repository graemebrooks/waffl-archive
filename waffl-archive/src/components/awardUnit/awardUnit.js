import React from 'react';
import styled from 'styled-components';

//styles
const Div = styled.div`
	width: 70vw;
	display: flex;
	flex-direction: column;
	background: #2d4059;
	margin: 2rem 0rem;
	padding: 1rem;

	img {
		max-width: 20rem;
		margin: 0 auto;
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
