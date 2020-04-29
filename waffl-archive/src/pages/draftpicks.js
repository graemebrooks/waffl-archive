import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// components
import Spinner from '../components/spinner/spinner';
import Layout from '../components/layout/layout';
import DraftYear from '../components/draftYear/draftYear';

// styles
const Div = styled.div`
	width: 70vw;
	display: flex;
	flex-direction: row;
	cursor: pointer;

	padding: 0.5rem;

	h3 {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		width: 33.3%;
		height: 100%;
		margin: 0;
		background: #213642;

		font-family: 'Source Sans Pro', sans-serif;
	}

	.active {
		background: #17b978;
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
	const [ data2014, setData2014 ] = useState(); // 2014 draft data
	const [ data2015, setData2015 ] = useState(); // 2015 draft data
	const [ data2016, setData2016 ] = useState(); // 2016 draft data
	const [ data2017, setData2017 ] = useState(); // 2017 draft data
	const [ colors, setColors ] = useState(); // team colors
	const [ logos, setLogos ] = useState(); // team logo

	const [ selected, setSelected ] = useState({
		selected: '2014'
	});
	const [ selectedData, setSelectedData ] = useState({});

	const switchDraft = (e) => {
		e.persist();
		setSelected({
			selected: e.target.innerHTML
		});
		switch (e.target.innerHTML) {
			case '2014':
				setSelectedData(data2014);
				break;
			case '2015':
				setSelectedData(data2015);
				break;
			case '2016':
				setSelectedData(data2016);
				break;
			case '2017':
				setSelectedData(data2017);
				break;
		}
	};

	useEffect(
		() => {
			if (!data2014 || !data2015 || !data2016 || !data2017 || !colors || !logos || !selectedData) {
				fetch(`https://waffl-archive-api.com/index/draftData/2014`)
					.then((x) => x.json())
					.then((x) => setData2014(x))
					.then(setSelectedData(data2014));
				fetch(`https://waffl-archive-api.com/index/draftData/2015`)
					.then((x) => x.json())
					.then((x) => setData2015(x));
				fetch(`https://waffl-archive-api.com/index/draftData/2016`)
					.then((x) => x.json())
					.then((x) => setData2016(x));
				fetch(`https://waffl-archive-api.com/index/draftData/2017`)
					.then((x) => x.json())
					.then((x) => setData2017(x));
				fetch(`https://waffl-archive-api.com/index/colors`).then((x) => x.json()).then((x) => setColors(x));
				fetch(`https://waffl-archive-api.com/index/logos`).then((x) => x.json()).then((x) => setLogos(x));
			}
		},
		[ data2014, data2015, data2016, data2017, colors, logos, selectedData ]
	);

	if (!data2014 || !data2015 || !data2016 || !data2017 || !colors || !logos || !selectedData) {
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
				<Div>
					<h3 className={selected.selected === '2014' ? 'active' : ''} onClick={(e) => switchDraft(e)}>
						2014
					</h3>
					<h3 className={selected.selected === '2015' ? 'active' : ''} onClick={(e) => switchDraft(e)}>
						2015
					</h3>
					<h3 className={selected.selected === '2016' ? 'active' : ''} onClick={(e) => switchDraft(e)}>
						2016
					</h3>
					<h3 className={selected.selected === '2017' ? 'active' : ''} onClick={(e) => switchDraft(e)}>
						2017
					</h3>
				</Div>
				<DraftYear
					title={selected.selected}
					tabData={tabData}
					colors={colors}
					logos={logos}
					getThemes={getThemes}
					data={selectedData}
				/>
			</Layout>
		);
	}
};

export default DraftpicksPage;
