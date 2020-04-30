import React, { useState } from 'react';
import styled from 'styled-components';

// imported components
import Layout from '../components/layout/layout';
import AwardUnit from '../components/awardUnit/awardUnit';

import trophyData from '../../static/trophyData';

// styles
const Div = styled.div`
	margin: 0 auto;

	* {
		list-style-type: none;
	}

	.formatSelect {
		width: 50vw;
		height: 6vh;
		background: #213642;
		display: flex;
		justify-content: center;
		cursor: pointer;
		margin-bottom: 2rem;

		h3 {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1rem;
			width: 50%;
			height: 100%;
			margin: 0;
			background: #213642;

			font-family: 'Source Sans Pro', sans-serif;
		}

		.active {
			background: #17b978;
		}
	}

	.yearContainer {
		background: #213642;
		display: flex;

		.activeAward {
			padding: 0.5rem;
			max-width: 6rem;
			cursor: pointer;
			height: 4rem;
			width: 100%;
			background: #17b978;

			img {
				margin: 0;
			}
		}

		.inactiveAward {
			padding: 0.5rem;
			max-width: 6rem;
			cursor: pointer;
			height: 4rem;
			width: 100%;

			img {
				margin: 0;
			}
		}
	}
`;

// COMPONENT
const TrophyCasePage = () => {
	const [ selectedFormat, setSelectedFormat ] = useState('By Award');
	const [ selectedAward, setSelectedAward ] = useState('Waffl Champion');

	const switchFormat = (e) => {
		e.persist();
		setSelectedFormat(e.target.innerHTML);
	};

	const switchAward = (e) => {
		e.persist();
		setSelectedAward(e.target.title);
	};

	const getAwardData = (award) => {
		let result = {
			logoUrl: '',
			data: []
		};
		switch (award) {
			case 'Waffl Champion':
				result.logoUrl = 'https://i.imgur.com/xqTogHD.png';
				result.data = trophyData.wafflChampion;
				break;
			case 'Waffl Runner Up':
				result.logoUrl = 'https://i.imgur.com/WbrbGwL.png';
				result.data = trophyData.wafflRunnerUp;
				break;
			case 'Waffl Third Place':
				result.logoUrl = 'https://i.imgur.com/n5Vm00u.png';
				result.data = trophyData.wafflThirdPlace;
				break;
		}
		return result;
	};

	return (
		<Layout>
			<h1>WAFFL Trophy Case</h1>
			<Div>
				<div className="formatSelect">
					<h3 className={selectedFormat === 'By Award' ? 'active' : ''} onClick={(e) => switchFormat(e)}>
						By Award
					</h3>
					<h3 className={selectedFormat === 'By Team' ? 'active' : ''} onClick={(e) => switchFormat(e)}>
						By Team
					</h3>
				</div>
				<div className="yearFormat">
					<div className="yearContainer">
						<div>
							<div
								title="Waffl Champion"
								className={selectedAward === 'Waffl Champion' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/xqTogHD.png"
									alt="Waffl Champion"
									title="Waffl Champion"
								/>
							</div>
							<div
								title="Waffl Runner Up"
								className={selectedAward === 'Waffl Runner Up' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/WbrbGwL.png"
									alt="Waffl Runner Up"
									title="Waffl Runner Up"
								/>
							</div>
							<div
								title="Waffl Third Place"
								className={selectedAward === 'Waffl Third Place' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/n5Vm00u.png"
									alt="Waffl Third Place"
									title="Waffl Third Place"
								/>
							</div>
						</div>
						<AwardUnit
							data={getAwardData(selectedAward).data}
							title={selectedAward}
							imageUrl={getAwardData(selectedAward).logoUrl}
						/>
					</div>
				</div>
			</Div>
		</Layout>
	);
};

export default TrophyCasePage;
