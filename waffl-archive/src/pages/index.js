import React from 'react';
import { motion } from 'framer-motion';

// components
import Layout from '../components/layout/layout';

// static assets
import wafflLogo from '../../static/waffl-logos/wafflArchive.png';

// styles
import indexStyles from './indexPage.module.scss';

export default () => (
	<Layout>
		<div className={indexStyles.content}>
			<motion.div className={indexStyles.logoBox} animate={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
				<img src={wafflLogo} className={indexStyles.logo} alt="WAFFL Logo" />
				<h2>The digital home of the Westwood Affiliated Fantasy Football League</h2>
				<p className={indexStyles.introText}>
					The Westwood Affiliated Fantasy Football League or "WAFFL" was founded in 2013. It's founding
					members included Kyle Harris, Ashley Melero, Jacob Phillips, Kelso Brooks, Dylon Hopp, Matt Canik,
					Chris Canik, Matt Lessig, Patrick Sladek, and Cody Simms. Since it's founding the league has also
					welcomed Shawn Webster, Sean Van Hoose, Pooja Shetty, Matt Melleen, Trevor Gunn, and Tina Till.
				</p>
			</motion.div>
		</div>
	</Layout>
);
