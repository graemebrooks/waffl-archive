import React, { useState } from 'react';
import styled from 'styled-components';

//styles
import statbookTeamStyles from './statbookTeam.module.scss';

const Div = styled.div`
	display: flex;
	flex-direction: column;

	h4 {
		color: ${(props) => props.secondaryColor};
	}

	.teamHeader {
		width: 100%;
		height: 100%;
		display: flex;
		border: solid 3px white;
		background: ${(props) => props.primaryColor};
		:hover {
			border: 3px solid ${(props) => props.secondaryColor};
		}
		margin: 0;
	}

	.teamDrawer {
		display: ${(props) => (props.drawerState.isOpen ? 'grid' : 'none')};
		width: 100%;
		height: 100%;
		background: ${(props) => props.secondaryColor};
		color: black;
		margin: 0;
	}
`;

const StatbookTeam = ({ team }) => {
	const [ teamDrawerState, setTeamDrawerState ] = useState({ isOpen: false });

	const toggleDrawer = () => {
		setTeamDrawerState({ isOpen: !teamDrawerState.isOpen });
	};

	return (
		<Div
			className={statbookTeamStyles.teamCard}
			primaryColor={team.colors.primary}
			secondaryColor={team.colors.secondary}
			drawerState={teamDrawerState}
			onClick={toggleDrawer}
		>
			<div className="teamHeader">
				<h1>{team.teamName}</h1>
				<img src={team.logoUrl} className={statbookTeamStyles.logo} alt={`Logo for ${team.teamName}`} />
				<div>
					<h4>Record</h4>
					<p>
						Wins: {team.allTimeWins} - Losses: {team.allTimeLosses}
					</p>
				</div>
				<div>
					<h4>Points Per Game</h4>
					<p>{team.allTimePointsPerGame}</p>
				</div>
				<div>
					<h4>Highest Scoring Game</h4>
					<p>
						{team.highestScoringGame.score} - {team.highestScoringGame.week}
					</p>
				</div>
			</div>
			<div className="teamDrawer">
				<div>
					<h3>Best Season</h3>
					<p>
						{team.bestSeason.record} - {team.bestSeason.year}
					</p>
				</div>
				<div>
					<h3>Worst Season</h3>
					<p>
						{team.worstSeason.record} - {team.worstSeason.year}
					</p>
				</div>
			</div>
		</Div>
	);
};

export default StatbookTeam;
