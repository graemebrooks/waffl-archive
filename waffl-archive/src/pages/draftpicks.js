import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// components
import Spinner from '../components/spinner/spinner';
import Layout from '../components/layout/layout';

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

const DraftpicksPage = () => {
	const [ data, setData ] = useState(); // draft data
	useEffect(() => {
		fetch(`https://waffl-archive-api.herokuapp.com/index/draftData/2014`)
			.then((x) => x.json())
			.then((x) => setData(x));
	}, []);

	if (!data) {
		return (
			<Layout>
				<h1>WAFFL Draft Pick Tracker</h1>
				<Spinner />
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>WAFFL Draft Pick Tracker</h1>
				<h2>2014 Draft</h2>
				<Div className="draft-2014">
					<div className="round">
						<ol>
							{data.firstRound.map((selection) => {
								return (
									<li>
										{selection.player} - {selection.owner}
									</li>
								);
							})}
						</ol>
					</div>
					<div className="round">
						<ol>
							{data.secondRound.map((selection) => {
								return (
									<li>
										{selection.player} - {selection.owner}
									</li>
								);
							})}
						</ol>
					</div>
					<div className="round">
						<ol>
							{data.thirdRound.map((selection) => {
								return (
									<li>
										{selection.player} - {selection.owner}
									</li>
								);
							})}
						</ol>
					</div>
				</Div>
			</Layout>
		);
	}
};

export default DraftpicksPage;
