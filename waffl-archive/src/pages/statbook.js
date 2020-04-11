import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import StatbookTeam from '../components/statbookTeam/statbookTeam';

const StatbookPage = () => {
	const [ data, setData ] = useState();
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		fetch(`http://waffl-archive-api.herokuapp.com/index/statsheet`).then((x) => x.json()).then((x) => setData(x));
		setLoading(false);
	}, []);

	if (!data) {
		return (
			<Layout>
				<h1>WAFFL Statbook</h1>
				<p>Loading data...</p>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>WAFFL Statbook</h1>
				<div>
					{data.teams.map((team) => {
						return <StatbookTeam team={team} />;
					})}
				</div>
			</Layout>
		);
	}
};

export default StatbookPage;
