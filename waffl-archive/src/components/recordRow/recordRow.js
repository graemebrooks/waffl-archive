import React, { useState } from 'react';
import styled from 'styled-components';

// components
import RecordUnit from '../recordUnit/recordUnit';

// styles
const Div = styled.div`
	width: 90vw;
	height: 8rem;
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
		background: red;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h3 {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			width: 20%;
			height: 100%;
			margin: 0;
			background: orange;
		}

		.active {
			background: rgb(0, 110, 255);
		}
	}

	.rowBody {
		color: black;
		background: white;
	}
`;

const RecordRow = ({ data, title }) => {
	const [ selected, setSelected ] = useState({
		selected: 'Player'
	});

	const switchSelected = (e) => {
		e.persist();
		console.log(e.target.innerHTML);
		setSelected({
			selected: e.target.innerHTML
		});
	};

	const playerRecords = {
		Player: data.highestPlayerScores,
		Quarterback: data.highestQbScores,
		Runningback: data.highestRbScores,
		'Wide Receiver': data.highestWrScores,
		'Tight End': data.highestTEScores
	};

	return (
		<Div selected={selected}>
			<div className="rowHeader">
				<h3 onClick={(e) => switchSelected(e)} className={selected.selected === 'Player' ? 'active' : ''}>
					Player
				</h3>
				<h3 onClick={(e) => switchSelected(e)} className={selected.selected === 'Quarterback' ? 'active' : ''}>
					Quarterback
				</h3>
				<h3 onClick={(e) => switchSelected(e)} className={selected.selected === 'Runningback' ? 'active' : ''}>
					Runningback
				</h3>
				<h3
					onClick={(e) => switchSelected(e)}
					className={selected.selected === 'Wide Receiver' ? 'active' : ''}
				>
					Wide Receiver
				</h3>
				<h3 onClick={(e) => switchSelected(e)} className={selected.selected === 'Tight End' ? 'active' : ''}>
					Tight End
				</h3>
			</div>
			<div className="rowBody">
				<RecordUnit
					data={playerRecords[selected.selected]}
					title={`Highest Weekly ${selected.selected} Scores`}
				/>
			</div>
		</Div>
	);
};

export default RecordRow;
