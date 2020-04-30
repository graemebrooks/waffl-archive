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
		p {
			margin: 3rem auto;
			border: 1px solid white;
			padding: 1rem;
			background: #213642;
		}

		div {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		h3 {
			margin: 0;
		}

		img {
			max-height: 5rem;
			margin: 0 2rem;
		}
	}
`;

const awardUnit = ({ data, title, imageUrl }) => {
	return (
		<Div>
			<img src={imageUrl} alt="WAFFL Champion" />
			<ul>
				{data.map((award) => {
					return (
						<li>
							<div>
								<h3>
									{award.year} - {award.team}{' '}
								</h3>
								<img src={award.logoUrl} />
							</div>
							<p>{award.content}</p>
						</li>
					);
				})}
			</ul>
		</Div>
	);
};

export default awardUnit;
