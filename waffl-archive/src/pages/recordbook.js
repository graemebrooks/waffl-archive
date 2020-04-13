import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

// components
import Layout from '../components/layout/layout';
import Spinner from '../components/spinner/spinner';

// styles
import recordbookPageStyles from './recordbookPage.module.scss';

const RecordbookPage = () => {
	const [ data, setData ] = useState(); // player record data
	useEffect(() => {
		fetch(`http://waffl-archive-api.herokuapp.com/index/playerRecords`)
			.then((x) => x.json())
			.then((x) => setData(x));
	}, []);

	if (!data) {
		return (
			<Layout>
				<h1>WAFFL Recordbook</h1>
				<Spinner />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>WAFFL Recordbook</h1>
				<ol>
					{data.highestPlayerScores.map((score) => {
						return (
							<li>
								<p>
									{score.playerTeamDate} - {score.score}
								</p>
							</li>
						);
					})}
				</ol>
			</Layout>
		);
	}
};

export default RecordbookPage;
