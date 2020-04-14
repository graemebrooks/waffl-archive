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
				<h2 className={recordbookPageStyles.recordType}>Player Records</h2>
				<RecordRow data={data} />
			</Layout>
		);
	}
};

export default RecordbookPage;
