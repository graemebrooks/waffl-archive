import React from 'react';
import styled from 'styled-components';

// components
import RecordUnit from '../recordUnit/recordUnit';

// styles
const Div = styled.div`
	width: 90vw;
	padding: .5rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const RecordRow = ({ data, title }) => {
	return (
		<Div>
			<RecordUnit data={data.highestPlayerScores} title="Highest Player Scores" />
			<RecordUnit data={data.highestQbScores} title="Highest Quarterback Scores" />
		</Div>
	);
};

export default RecordRow;
