import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import Layout from '../components/layout/layout';

// static assets
import wafflLogo from '../../static/waffl-logos/wafflArchive.png';

// styles
import indexStyles from './indexPage.module.scss';
const Div = styled.div`
	height: 90vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		color: orange;
	}

	.logoBox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1.5rem;

		border: 5px solid rgb(0, 110, 255);
		border-radius: .5rem;
		background: rgba(0, 110, 255, 0.3);

		h1 {
			padding: 1rem;
			font-size: 5rem;
			align-content: center;
			justify-content: center;
		}
	}

	.introText {
		width: 60vw;
	}
`;

export default () => (
	<Layout>
		<Div>
			<motion.div className="logoBox" animate={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
				<img src={wafflLogo} className={indexStyles.logo} alt="WAFFL Logo" />
				<h2>The digital home of the Westwood Affiliated Fantasy Football League</h2>
				<p className="introText">
					The Westwood Affiliated Fantasy Football League or "WAFFL" was founded in 2013. It's founding
					members included Kyle Harris, Ashley Melero, Jacob Phillips, Kelso Brooks, Dylon Hopp, Matt Canik,
					Chris Canik, Matt Lessig, Patrick Sladek, and Cody Simms. Since it's founding the league has also
					welcomed Shawn Webster, Sean Van Hoose, Pooja Shetty, Matt Melleen, Trevor Gunn, and Tina Till.
				</p>
			</motion.div>
		</Div>
	</Layout>
);
