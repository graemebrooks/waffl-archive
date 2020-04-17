import React, { useState, useEffect } from 'react';

// components
import Layout from '../components/layout/layout';
import RecordRow from '../components/recordRow/recordRow';
import Spinner from '../components/spinner/spinner';

// styles
import recordbookPageStyles from './recordbookPage.module.scss';

const RecordbookPage = () => {
	const [ data, setData ] = useState(); // player record data
	useEffect(() => {
		fetch(`https://waffl-archive-api.herokuapp.com/index/playerRecords`)
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
		const formattedData = {
			weeklyRecords: {
				tabTitles: [ 'Player', 'Quarterback', 'Runningback', 'Wide Receiver', 'Tight End' ],
				records: {
					Player: data.highestPlayerScores,
					Quarterback: data.highestQbScores,
					Runningback: data.highestRbScores,
					'Wide Receiver': data.highestWrScores,
					'Tight End': data.highestTEScores
				},
				unitTitle: 'Highest weekly scores: '
			},
			seasonRecords: {
				tabTitles: [ 'Quarterback', 'Runningback', 'Wide Receiver', 'Tight End', 'Defense' ],
				records: {
					Quarterback: data.bestQbSeasons,
					Runningback: data.bestRbSeasons,
					'Wide Receiver': data.bestWrSeasons,
					'Tight End': data.bestTeSeasons,
					Defense: data.bestDefSeasons
				},
				unitTitle: 'Highest season total: '
			}
		};

		return (
			<Layout>
				<h1>WAFFL Recordbook</h1>
				<h2 className={recordbookPageStyles.recordType}>Player Records</h2>
				<RecordRow data={formattedData.weeklyRecords} />
				<RecordRow data={formattedData.seasonRecords} />
			</Layout>
		);
	}
};

export default RecordbookPage;
