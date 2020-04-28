import React from 'react';
import styled from 'styled-components';

//components
import DraftSelection from '../draftSelection/draftSelection';

//styles
const Div = styled.div`
	width: 50vw;
	padding: 1rem;
	margin: 0 auto;

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

const DraftRound = ({ data, colors, logos, getThemes, round }) => {
	return (
		<Div className="round">
			<ol>
				{data[round].map((selection) => {
					return <DraftSelection selection={selection} colors={colors} logos={logos} getThemes={getThemes} />;
				})}
			</ol>
		</Div>
	);
};

export default DraftRound;
