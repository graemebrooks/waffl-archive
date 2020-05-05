import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
		border: solid 4px #2d4059;
		background: ${(props) => props.primaryColor};
		:hover {
			border: 4px solid ${(props) => props.secondaryColor};
		}
		margin: 0;
	}

	.teamDrawer {
		display: none;
		width: 100%;
		height: 0%;
		background: ${(props) => props.secondaryColor};
		color: black;
		margin: 0;
		justify-content: space-between;
	}

	.statColumn {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	@media (max-width: 700px) {
		.teamHeader {
			max-width: 80vw;
			display: flex;
			flex-direction: column;

			img {
				width: 8rem;
			}
		}

		.teamDrawer {
			max-width: 80vw;
			display: flex;
			flex-direction: column;
		}
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
			<motion.div className="teamHeader" whileTap={{ scale: 0.95 }}>
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
			</motion.div>
			<motion.div
				className="teamDrawer"
				initial={{
					height: teamDrawerState.isOpen ? '100%' : '0%',
					display: teamDrawerState.isOpen ? 'flex' : 'none'
				}}
				animate={{
					height: teamDrawerState.isOpen ? '100%' : '0%',
					display: teamDrawerState.isOpen ? 'flex' : 'none'
				}}
				transition={{ duration: 2, ease: 'easeOut' }}
			>
				<div className="statColumn">
					<h3>Winning Seasons - {team.Seasons.winning}</h3>
					<h3>Losing Seasons - {team.Seasons.losing}</h3>
				</div>
				<div className="statColumn">
					<h3>Best Season</h3>
					<p>
						{team.bestSeason.record} - {team.bestSeason.year}
					</p>
					<h3>Worst Season</h3>
					<p>
						{team.worstSeason.record} - {team.worstSeason.year}
					</p>
				</div>

				<div className="statColumn">
					<h3>Longest Win Streak: {team.longestWinStreak}</h3>
					<h3>Longest Loss Streak: {team.longestLossStreak}</h3>
				</div>
			</motion.div>
		</Div>
	);
};

export default StatbookTeam;
