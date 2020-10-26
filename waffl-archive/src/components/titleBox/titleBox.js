import React from 'react';
import styled from 'styled-components';

//components

//styles
const Div = styled.div`
	background: rgb(147, 160, 172);
	padding: 1rem;
	border-radius: 5px;

	.title {
		margin: 0;
	}
`;

const TitleBox = ({ title }) => {
	return (
		<Div>
			<h1 className="title">{title}</h1>
		</Div>
	);
};

export default TitleBox;
