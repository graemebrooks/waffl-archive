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

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				margin: 0;
				max-height: 3rem;
			}
		}

		.inactiveAward {
			padding: 0.5rem;
			max-width: 6rem;
			cursor: pointer;
			height: 4rem;
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				margin: 0;
				max-height: 3rem;
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
			case 'Most Surprising':
				result.logoUrl = 'https://i.imgur.com/d1OOFqw.png';
				result.data = trophyData.mostSurprising;
				break;
			case 'Most Dissapointing':
				result.logoUrl = 'https://i.imgur.com/mQMTqgw.png';
				result.data = trophyData.mostDissapointing;
				break;
			case 'Oldest Team':
				result.logoUrl = 'https://i.imgur.com/g78GpfJ.png';
				result.data = trophyData.oldestTeam;
				break;
			case 'Youngest Team':
				result.logoUrl = 'https://i.imgur.com/dIzK1Fn.png';
				result.data = trophyData.youngestTeam;
				break;
			case 'Analytical Ron':
				result.logoUrl = 'https://i.imgur.com/LbkcXtZ.png';
				result.data = trophyData.analyticalRon;
				break;
			case 'Biggest Victory':
				result.logoUrl = 'https://i.imgur.com/r0OWNG7.png';
				result.data = trophyData.biggestVictory;
				break;
			case 'Worst Loss':
				result.logoUrl = 'https://i.imgur.com/tOkRNfH.png';
				result.data = trophyData.worstLoss;
				break;
			case 'Best Regular Season Record':
				result.logoUrl = 'https://i.imgur.com/4QrXkcr.png';
				result.data = trophyData.bestRecord;
				break;
			case 'Total Points Leader':
				result.logoUrl = 'https://i.imgur.com/5HSujwC.png';
				result.data = trophyData.totalPointLeader;
				break;
			case 'Fewest Total Points':
				result.logoUrl = 'https://i.imgur.com/s9OrAfA.png';
				result.data = trophyData.fewestTotalPoints;
				break;
			case 'Third Last':
				result.logoUrl = 'https://i.imgur.com/OIg5BY5.png';
				result.data = trophyData.thirdLast;
				break;
			case 'Second Last':
				result.logoUrl = 'https://i.imgur.com/2xcpXvn.png';
				result.data = trophyData.secondLast;
				break;
			case 'The Bitch':
				result.logoUrl = 'https://i.imgur.com/lW1osWw.png';
				result.data = trophyData.theBitch;
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
							<div
								title="Most Surprising"
								className={selectedAward === 'Most Surprising' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/d1OOFqw.png"
									alt="Most Surprising"
									title="Most Surprising"
								/>
							</div>
							<div
								title="Most Dissapointing"
								className={selectedAward === 'Most Dissapointing' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/mQMTqgw.png"
									alt="Most Dissapointing"
									title="Most Dissapointing"
								/>
							</div>
							<div
								title="Oldest Team"
								className={selectedAward === 'Oldest Team' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/g78GpfJ.png" alt="Oldest Team" title="Oldest Team" />
							</div>
							<div
								title="Youngest Team"
								className={selectedAward === 'Youngest Team' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/dIzK1Fn.png" alt="Youngest Team" title="Youngest Team" />
							</div>
							<div
								title="Analytical Ron"
								className={selectedAward === 'Analytical Ron' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/LbkcXtZ.png"
									alt="Analytical Ron"
									title="Analytical Ron"
								/>
							</div>
							<div
								title="Biggest Victory"
								className={selectedAward === 'Biggest Victory' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/r0OWNG7.png"
									alt="Biggest Victory"
									title="Biggest Victory"
								/>
							</div>
							<div
								title="Worst Loss"
								className={selectedAward === 'Worst Loss' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/tOkRNfH.png" alt="Worst Loss" title="Worst Loss" />
							</div>
							<div
								title="Best Regular Season Record"
								className={
									selectedAward === 'Best Regular Season Record' ? 'activeAward' : 'inactiveAward'
								}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/4QrXkcr.png"
									alt="Best Regular Season Record"
									title="Best Regular Season Record"
								/>
							</div>
							<div
								title="Total Points Leader"
								className={selectedAward === 'Total Points Leader' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/5HSujwC.png"
									alt="Total Points Leader"
									title="Total Points Leader"
								/>
							</div>
							<div
								title="Fewest Total Points"
								className={selectedAward === 'Fewest Total Points' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img
									src="https://i.imgur.com/s9OrAfA.png"
									alt="Fewest Total Points"
									title="Fewest Total Points"
								/>
							</div>
							<div
								title="Third Last"
								className={selectedAward === 'Third Last' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/OIg5BY5.png" alt="Third Last" title="Third Last" />
							</div>
							<div
								title="Second Last"
								className={selectedAward === 'Second Last' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/2xcpXvn.png" alt="Second Last" title="Second Last" />
							</div>
							<div
								title="The Bitch"
								className={selectedAward === 'The Bitch' ? 'activeAward' : 'inactiveAward'}
								onClick={(e) => switchAward(e)}
							>
								<img src="https://i.imgur.com/lW1osWw.png" alt="The Bitch" title="The Bitch" />
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
