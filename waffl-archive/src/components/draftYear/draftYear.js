import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import DraftRound from '../draftRound/draftRound';

// styles
const Div = styled.div`
	width: 100%;
	padding: .5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h3 {
		background: green;
	}

	.rowHeader {
		width: 100%
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		cursor: pointer;

		h3 {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			width: 33.3%;
			height: 100%;
			margin: 0;
			background: #213642;

			font-family: 'Inter', sans-serif;
		}

		.active {
			background: #17b978;
		}
	}

	.rowBody {
		color: white;
		background: #2d4059;
	}

	@media (max-width: 480px) {
		width: 100%;

		.rowBody {
			width: 100%;
		}
	}
`;

function formatRound(inputRound) {
	let result = '';
	switch (inputRound) {
		case 'First Round':
			result = 'firstRound';
			break;
		case 'Second Round':
			result = 'secondRound';
			break;
		case 'Third Round':
			result = 'thirdRound';
			break;
	}
	return result;
}

const DraftYear = ({ tabData, title, data, colors, logos, getThemes }) => {
	const [ selected, setSelected ] = useState({
		selected: tabData.tabTitles[0],
		formattedRound: formatRound(tabData.tabTitles[0])
	});

	const switchSelected = (e) => {
		e.persist();
		setSelected({
			selected: e.target.innerHTML,
			formattedRound: formatRound(e.target.innerHTML)
		});
	};

	return (
		<Div selected={selected}>
			<div className="rowHeader">
				{tabData.tabTitles.map((title) => {
					return (
						<motion.h3
							onClick={(e) => switchSelected(e)}
							className={selected.selected === title ? 'active' : ''}
						>
							{title}
						</motion.h3>
					);
				})}
			</div>
			<div className="rowBody">
				<DraftRound
					data={data}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					round={selected.formattedRound}
				/>
			</div>
		</Div>
	);
};

export default DraftYear;
