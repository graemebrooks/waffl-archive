import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';

export default () => (
	<Layout>
		<h1>Aloha</h1>
		<h2>I'm Kelso, I live in ATX!</h2>
		<p>
			Need a developer? <Link to="/contact">Contact me.</Link>
		</p>
	</Layout>
);
