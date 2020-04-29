import React, { useState } from 'react';
import styled from 'styled-components';

// imported components
import Layout from '../components/layout/layout';
import AwardUnit from '../components/awardUnit/awardUnit';

// styles
const Div = styled.div`
	.formatSelect {
		width: 50vw;
		height: 6vh;
		background: #213642;
		display: flex;
		justify-content: center;
		cursor: pointer;

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
`;

// hard-coded trophy data
const wafflChampion = [
	{
		year: '2013',
		team: 'West Lubbock Ice Babies',
		content:
			'The first season in WAFFL saw an undefeated campaign, the first I have personally ever seen or heard about in any league. The Ice Babies went a perfect 14-0 in the regular season and had little resistance in the playoffs. The star studded lineup was highlighted bythe record shattering season from Peyton Manning who scored 446 points in 2013, by far the most of any QB. The Ice Babies also owned the number one WR in Josh Gordon who missed the first two games with a suspension. Star WR Julio Jones also missed the whole season past Week 5.The star-studded championship lineup included: QB Peyton Manning (1st)... RB LeSean McCoy (2nd)... RB Matt Forte (3rd)... WR JoshGordon (1st)... WR Dez Bryant (7th)... WR Larry Fitzgerald (17th)... TE Jordan Cameron (5th)... The Ice Babies scored 2115 points in 2013, 1st in the league.'
	},
	{
		year: '2014',
		team: 'North Austin Ice Babies',
		content:
			"The first two seasons in WAFFL saw a repeat champion. The Ice Babies followed up their perfect 2013 season with a similarly successful one, only blemished once in the regular season. The Ice Babies have gone 27-1 with two titles over the first two seasons of WAFFL,becoming the league's first dynasty. This star studded lineup was highlighted by an excellent season from Rob Gronkowski whoscored 234.4points in 2014, an astronomical number in a very weak year at TE. The Ice Babies welcomed back star WR Julio Jones and were defined by their impressive receiving corps. The star-studded championship lineup included: QB Peyton Manning (4th)... RB Matt Forte (3rd)... RB LeSean McCoy (12th)... WR Dez Bryant (4th)... WR Julio Jones (7th)... WR Calvin Johnson (14th)... TE Rob Gronkowski (1st)...The Ice Babies scored 2046.1 points in 2014, 1st in the league."
	}
];

// COMPONENT
const TrophyCasePage = () => {
	const [ selected, setSelected ] = useState('By Award');

	const switchFormat = (e) => {
		e.persist();
		setSelected(e.target.innerHTML);
	};

	return (
		<Layout>
			<h1>WAFFL Trophy Case</h1>
			<Div>
				<div className="formatSelect">
					<h3 className={selected === 'By Award' ? 'active' : ''} onClick={(e) => switchFormat(e)}>
						By Award
					</h3>
					<h3 className={selected === 'By Team' ? 'active' : ''} onClick={(e) => switchFormat(e)}>
						By Team
					</h3>
				</div>
				<div className="yearFormat">
					<AwardUnit
						data={wafflChampion}
						title={'WAFFL Champion'}
						imageUrl={'https://i.imgur.com/xqTogHD.png'}
					/>
				</div>
			</Div>
		</Layout>
	);
};

export default TrophyCasePage;
