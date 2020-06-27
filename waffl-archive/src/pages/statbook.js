import React, { useState, useEffect } from 'react';

// components
import Layout from '../components/layout/layout';
import StatbookTeam from '../components/statbookTeam/statbookTeam';
import Spinner from '../components/spinner/spinner';

// styles
import statbookPageStyles from './statbookPage.module.scss';

const StatbookPage = () => {
	const [ data, setData ] = useState(); // team data
	const [ PBPData, setPBPData ] = useState(); // Points by position alltime data
	useEffect(() => {
		fetch(`https://waffl-archive-api.com/index/statsheet`).then((x) => x.json()).then((x) => setData(x));
		fetch(`https://waffl-archive-api.com/index/teamRecords`).then((x) => x.json()).then((x) => setPBPData(x));
	}, []);

	if (!data || !PBPData) {
		return (
			<Layout>
				<h1>WAFFL Statbook</h1>
				<Spinner />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>WAFFL Statbook</h1>
				<div className={statbookPageStyles.statsContainer}>
					{data.teams.map((team) => {
						let teamPBP;
						let primaryColor;

						switch (team.teamName) {
							case 'Cartels':
								teamPBP = PBPData.pointsByPosition.cartels;
								primaryColor = data.teams[5].colors.primary;
								break;
							case 'Beer':
								teamPBP = PBPData.pointsByPosition.beer;
								primaryColor = data.teams[2].colors.primary;
								break;
							case 'Ice Babies':
								teamPBP = PBPData.pointsByPosition.iceBabies;
								primaryColor = data.teams[0].colors.primary;
								break;
							case 'Islanders':
								teamPBP = PBPData.pointsByPosition.islanders;
								primaryColor = data.teams[3].colors.primary;
								break;
							case 'Wenches':
								teamPBP = PBPData.pointsByPosition.wenches;
								primaryColor = data.teams[8].colors.primary;
								break;
							case 'Toad Lickers':
								teamPBP = PBPData.pointsByPosition.toadLickers;
								primaryColor = data.teams[7].colors.primary;
								break;
							case 'Chili Peppers':
								teamPBP = PBPData.pointsByPosition.chiliPeppers;
								primaryColor = data.teams[4].colors.primary;
								break;
							case 'Digital Rays':
								teamPBP = PBPData.pointsByPosition.digitalRays;
								primaryColor = data.teams[1].colors.primary;
								break;
							case 'Not The Jets':
								teamPBP = PBPData.pointsByPosition.notTheJets;
								primaryColor = data.teams[6].colors.primary;
								break;
							case 'Nadoes':
								teamPBP = PBPData.pointsByPosition.nadoes;
								primaryColor = data.teams[9].colors.primary;
								break;
							case 'Librarians':
								teamPBP = PBPData.pointsByPosition.librarians;
								primaryColor = data.teams[10].colors.primary;
								break;
						}

						return <StatbookTeam team={team} PBPData={teamPBP} primaryColor={primaryColor} />;
					})}
				</div>
			</Layout>
		);
	}
};

export default StatbookPage;
