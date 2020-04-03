import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const StatbookPage = () => {
	return (
		<Layout>
			<h1>WAFFL Statbook</h1>
			<p>This is a demo application for the purpose of learning GatsbyJS</p>
			<p>
				For any questions, feel free to <Link to="/contact">contact me</Link>
			</p>
		</Layout>
	);
};

export default StatbookPage;
