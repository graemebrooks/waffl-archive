import React from 'react';
import styled from 'styled-components';

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
			<div className="logoBox">
				<img src={wafflLogo} className={indexStyles.logo} alt="WAFFL Logo" />
			</div>
			<h2>The digital home of the Westwood Affiliated Fantasy Football League</h2>
			<p className="introText">
				The Westwood Affiliated Fantasy Football League or "WAFFL" was founded in 2013. It's founding members
				included Kyle Harris, Ashley Melero, Jacob Phillips, Kelso Brooks, Dylon Hopp, Matt Canik, Chris Canik,
				Matt Lessig, Patrick Sladek, and Cody Simms. Since it's founding the league has also welcomed Shawn
				Webster, Sean Van Hoose, Pooja Shetty, Matt Melleen, Trevor Gunn, and Tina Till.
			</p>
		</Div>
	</Layout>
);
