import React from 'react';

//styles
import statbookTeamStyles from './statbookTeam.module.scss';

const statbookTeam = ({ team }) => {
	return (
		<div className={statbookTeamStyles.teamCard}>
			<h1>{team.teamName}</h1>
			<h4>Record</h4>
			<p>
				Wins: {team.allTimeWins} - Losses: {team.allTimeLosses}
			</p>
			<h4>Points Per Game</h4>
			<p>{team.allTimePointsPerGame}</p>
			<h4>Highest Scoring Game</h4>
			<p>
				{team.highestScoringGame.score}, {team.highestScoringGame.week}
			</p>
			<img src={team.logoUrl} className={statbookTeamStyles.logo} />
		</div>
	);
};

export default statbookTeam;
