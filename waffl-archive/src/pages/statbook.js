import React, { useState, useEffect } from 'react';

// components
import Layout from '../components/layout/layout';
import StatbookTeam from '../components/statbookTeam/statbookTeam';
import Spinner from '../components/spinner/spinner';
import TitleBox from '../components/titleBox/titleBox';

// styles
import statbookPageStyles from './statbookPage.module.scss';
import convertName from '../../services/convertTeamName';

const StatbookPage = () => {
	const [ data, setData ] = useState(); // team data
	const [ teamRecordData, setTeamRecordData ] = useState(); // Points by position alltime data
	useEffect(() => {
		fetch(`https://waffl-archive-api.com/index/statsheet`).then((x) => x.json()).then((x) => setData(x));
		fetch(`https://waffl-archive-api.com/index/teamRecords`)
			.then((x) => x.json())
			.then((x) => setTeamRecordData(x));
	}, []);

	if (!data || !teamRecordData) {
		return (
			<Layout>
				<TitleBox title="WAFFL Statbook" />
				<Spinner />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<TitleBox title="WAFFL Statbook" />
				<div className={statbookPageStyles.statsContainer}>
					{data.teams.map((team) => {
						let teamPBP;
						let primaryColor;

						switch (team.teamName) {
							case 'Cartels':
								teamPBP = teamRecordData.cartels.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Beer':
								teamPBP = teamRecordData.beer.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Ice Babies':
								teamPBP = teamRecordData.iceBabies.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Islanders':
								teamPBP = teamRecordData.islanders.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Wenches':
								teamPBP = teamRecordData.wenches.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Toad Lickers':
								teamPBP = teamRecordData.toadLickers.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Chili Peppers':
								teamPBP = teamRecordData.chiliPeppers.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Digital Rays':
								teamPBP = teamRecordData.digitalRays.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Not The Jets':
								teamPBP = teamRecordData.notTheJets.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Nadoes':
								teamPBP = teamRecordData.nadoes.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
							case 'Librarians':
								teamPBP = teamRecordData.librarians.pointsByPosition;
								primaryColor = team.colors.primary;
								break;
						}

						return (
							<StatbookTeam
								team={team}
								teamPBP={teamPBP}
								primaryColor={primaryColor}
								teamRecordData={teamRecordData}
							/>
						);
					})}
				</div>
			</Layout>
		);
	}
};

export default StatbookPage;
