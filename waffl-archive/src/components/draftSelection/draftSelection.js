import React from 'react';
import styled from 'styled-components';

//styles
const Li = styled.li`
	display: flex;
	justify-content: space-between;

	padding: 0.5rem;
	background-color: ${(props) => props.getThemes(props.owner, props.colors, props.logos).colors.primary};
	border-right: 5px solid ${(props) => props.getThemes(props.owner, props.colors, props.logos).colors.secondary};
	margin: 1rem;

	img {
		max-height: 2rem;
	}
`;

const DraftSelection = ({ selection, colors, logos, getThemes }) => {
	return (
		<Li owner={selection.owner} colors={colors} logos={logos} getThemes={getThemes}>
			{selection.player} - {selection.owner}
			<img src={getThemes(selection.owner, colors, logos).logo} />
		</Li>
	);
};

export default DraftSelection;
