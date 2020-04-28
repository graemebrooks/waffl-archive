import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// components
import Spinner from '../components/spinner/spinner';
import Layout from '../components/layout/layout';
import DraftSelection from '../components/draftSelection/draftSelection';
import DraftYear from '../components/draftYear/draftYear';

// styles
const Div = styled.div`
	width: 80vw;
	display: flex;
	flex-direction: row;
	background: #424242;

	padding: 1rem;

	.round {
		width: 33%;
	}
`;

function getThemes(team, colors, logos) {
	let teamThemes = { colors: {}, logo: '' };
	switch (team) {
		case 'Islanders':
			teamThemes.colors = colors.islanders;
			teamThemes.logo = logos.islanders;
			break;
		case 'Ice Babies':
			teamThemes.colors = colors.iceBabies;
			teamThemes.logo = logos.iceBabies;
			break;
		case 'Digital Rays':
			teamThemes.colors = colors.digitalRays;
			teamThemes.logo = logos.digitalRays;
			break;
		case 'Beer':
			teamThemes.colors = colors.beer;
			teamThemes.logo = logos.beer;
			break;
		case 'Chili Peppers':
			teamThemes.colors = colors.chiliPeppers;
			teamThemes.logo = logos.chiliPeppers;
			break;
		case 'Cartels':
			teamThemes.colors = colors.cartels;
			teamThemes.logo = logos.cartels;
			break;
		case 'Not The Jets':
			teamThemes.colors = colors.notTheJets;
			teamThemes.logo = logos.notTheJets;
			break;
		case 'Toad Lickers':
			teamThemes.colors = colors.toadLickers;
			teamThemes.logo = logos.toadLickers;
			break;
		case 'Wenches':
			teamThemes.colors = colors.wenches;
			teamThemes.logo = logos.wenches;
			break;
		case 'Nadoes':
			teamThemes.colors = colors.nadoes;
			teamThemes.logo = logos.nadoes;
			break;
		case 'Librarians':
			teamThemes.colors = colors.librarians;
			teamThemes.logo = logos.librarians;
			break;
	}
	return teamThemes;
}

const DraftpicksPage = () => {
	const [ data, setData ] = useState(); // draft data
	const [ colors, setColors ] = useState(); // team colors
	const [ logos, setLogos ] = useState(); // team logo
	useEffect(() => {
		fetch(`https://waffl-archive-api.com/index/draftData/2014`).then((x) => x.json()).then((x) => setData(x));
		fetch(`https://waffl-archive-api.com/index/colors`).then((x) => x.json()).then((x) => setColors(x));
		fetch(`https://waffl-archive-api.com/index/logos`).then((x) => x.json()).then((x) => setLogos(x));
	}, []);

	if (!data || !colors || !logos) {
		return (
			<Layout>
				<h1>WAFFL Draft Pick Tracker</h1>
				<Spinner />
			</Layout>
		);
	} else {
		const tabData = { tabTitles: [ 'First Round', 'Second Round', 'Third Round' ] };
		return (
			<Layout>
				<h1>WAFFL Draft Pick Tracker</h1>
				<DraftYear
					title="2014"
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={data}
				/>
			</Layout>
		);
	}
};

export default DraftpicksPage;
