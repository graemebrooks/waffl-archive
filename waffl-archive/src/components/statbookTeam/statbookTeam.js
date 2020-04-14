import React from 'react';
import styled from 'styled-components';

//styles
import statbookTeamStyles from './statbookTeam.module.scss';

const Div = styled.div`
	background: ${(props) => props.primaryColor};
	:hover {
		border: 3px solid ${(props) => props.secondaryColor};
	}

	h4 {
		color: ${(props) => props.secondaryColor};
	}
`;

const statbookTeam = ({ team }) => {
	return (
		<Div
			className={statbookTeamStyles.teamCard}
			primaryColor={team.colors.primary}
			secondaryColor={team.colors.secondary}
		>
			<h1>{team.teamName}</h1>
			<img src={team.logoUrl} className={statbookTeamStyles.logo} />
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
		</Div>
	);
};

export default statbookTeam;
