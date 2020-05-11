import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import RecordUnit from '../recordUnit/recordUnit';

// styles
const Div = styled.div`
	width: 90vw;
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
			width: 20%;
			height: 100%;
			margin: 0;
			background: #213642;

			font-family: 'Cairo', sans-serif;
		}

		.active {
			background: #17b978;
		}
	}

	.rowBody {
		color: white;
		background: #2d4059;
		margin-bottom: 3rem;
	}

	@media (max-width: 480px) {
		.rowHeader {
			display: flex;
			flex-direction: column;

			h3 {
				width: 100%;
			}
		}
	}

`;

const RecordRow = ({ data, title }) => {
	const [ selected, setSelected ] = useState({
		selected: data.tabTitles[0]
	});

	const switchSelected = (e) => {
		e.persist();
		console.log(e.target.innerHTML);
		setSelected({
			selected: e.target.innerHTML
		});
	};

	return (
		<Div selected={selected}>
			<div className="rowHeader">
				{data.tabTitles.map((title) => {
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
				<RecordUnit data={data.records[selected.selected]} title={data.unitTitle + selected.selected} />
			</div>
		</Div>
	);
};

export default RecordRow;
