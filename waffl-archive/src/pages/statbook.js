import React, { useState, useEffect } from 'react';

// components
import Layout from '../components/layout/layout';
import StatbookTeam from '../components/statbookTeam/statbookTeam';
import Spinner from '../components/spinner/spinner';

// styles
import statbookPageStyles from './statbookPage.module.scss';

const StatbookPage = () => {
	const [ data, setData ] = useState(); // team data
	useEffect(() => {
		fetch(`https://waffl-archive-api.herokuapp.com/index/statsheet`).then((x) => x.json()).then((x) => setData(x));
	}, []);

	if (!data) {
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
						return <StatbookTeam team={team} />;
					})}
				</div>
			</Layout>
		);
	}
};

export default StatbookPage;
