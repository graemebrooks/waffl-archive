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
	width: 70vw;
	display: flex;
	flex-direction: row;
	background: #424242;

	padding: 1rem;
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
	const [ data2014, setData2014 ] = useState(); // 2014 draft data
	const [ data2015, setData2015 ] = useState(); // 2015 draft data
	const [ data2016, setData2016 ] = useState(); // 2016 draft data
	const [ data2017, setData2017 ] = useState(); // 2017 draft data
	const [ colors, setColors ] = useState(); // team colors
	const [ logos, setLogos ] = useState(); // team logo
	useEffect(() => {
		fetch(`https://waffl-archive-api.com/index/draftData/2014`).then((x) => x.json()).then((x) => setData2014(x));
		fetch(`https://waffl-archive-api.com/index/draftData/2015`).then((x) => x.json()).then((x) => setData2015(x));
		fetch(`https://waffl-archive-api.com/index/draftData/2016`).then((x) => x.json()).then((x) => setData2016(x));
		fetch(`https://waffl-archive-api.com/index/draftData/2017`).then((x) => x.json()).then((x) => setData2017(x));
		fetch(`https://waffl-archive-api.com/index/colors`).then((x) => x.json()).then((x) => setColors(x));
		fetch(`https://waffl-archive-api.com/index/logos`).then((x) => x.json()).then((x) => setLogos(x));
	}, []);

	if (!data2014 || !colors || !logos) {
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
				{/* <Div>'Aloha'</Div> */}
				<DraftYear
					title="2014"
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={data2014}
				/>
				<DraftYear
					title="2015"
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={data2015}
				/>
				<DraftYear
					title="2016"
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={data2016}
				/>
				<DraftYear
					title="2017"
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={data2017}
				/>
			</Layout>
		);
	}
};

export default DraftpicksPage;
