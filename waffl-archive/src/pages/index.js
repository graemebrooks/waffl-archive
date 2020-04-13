import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

import wafflLogo from '../../static/waffl-logos/waffl-14.png';

import indexStyles from './indexPage.module.scss';

export default () => (
	<Layout>
		<h1 className={indexStyles.title}>WAFFL Archive</h1>
		<h2>The digital home of the Westwood Affiliated Fantasy Football League</h2>
		<img src={wafflLogo} className={indexStyles.logo} />
	</Layout>
);
