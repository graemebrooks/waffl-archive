import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//components
import PBPradarChart from '../PBPradarChart/PBPradarChart';
import MapChart from '../mapChart/MapChart';
import TeamRecordChart from '../teamRecordChart/teamRecordChart';

//styles
import statbookTeamStyles from './statbookTeam.module.scss';

const Div = styled.div`
	display: flex;
	flex-direction: column;

	width: 70vw;

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
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 0%;
		background: ${(props) => props.secondaryColor};
		color: black;
		margin: 0;
		justify-content: space-between;
	}

	.charts {
		width: 100%;
		display: grid;
		grid-template-columns: 3fr 5fr;
		margin: 0;
	}

	@media (max-width: 700px) {
		width: 90vw;

		.teamHeader {
			max-width: 90vw;
			display: flex;
			flex-direction: column;

			img {
				width: 8rem;
			}
		}

		.teamDrawer {
			max-width: 90vw;
			display: flex;
			flex-direction: column;
		}

		.charts {
			width: 100%;
			display: flex;
			flex-direction: column;
		}
	}
`;

const StatbookTeam = ({ team, teamPBP, teamRecordData, primaryColor }) => {
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
				<div className="charts">
					<div>
						<PBPradarChart teamPBP={teamPBP} primaryColor={primaryColor} team={team.teamName} />
					</div>
					<div>
						<TeamRecordChart
							teamRecordData={teamRecordData}
							primaryColor={primaryColor}
							team={team.teamName}
							secondary={team.colors.secondary}
						/>
					</div>
				</div>
				<MapChart primary={team.colors.primary} secondary={team.colors.secondary} team={team.teamName} />
			</motion.div>
		</Div>
	);
};

export default StatbookTeam;
