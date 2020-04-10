import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const StatbookPage = () => {
	const [ data, setData ] = useState();
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		fetch(`http://waffl-archive-api.herokuapp.com/index/statsheet`).then((x) => x.json()).then((x) => setData(x));
		setLoading(false);
	}, []);

	console.log(data);

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
				<ul>
					{data.teams.map((team) => {
						return (
							<li>
								<h2>{team.teamName}</h2>
								<h3>Regular Season Record</h3>
								<p>
									Wins: {team.allTimeWins} - Losses: {team.allTimeLosses}
								</p>
							</li>
						);
					})}
				</ul>
			</Layout>
		);
	}
};

export default StatbookPage;
