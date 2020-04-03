import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

const RecordbookPage = () => {
	return (
		<Layout>
			<h1>WAFFL Recordbook</h1>
			<p>This is a demo application for the purpose of learning GatsbyJS</p>
			<p>
				For any questions, feel free to <Link to="/contact">contact me</Link>
			</p>
		</Layout>
	);
};

export default RecordbookPage;