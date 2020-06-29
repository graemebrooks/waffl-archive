import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	ComposedChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	Bar,
	Line,
	ReferenceLine,
	ResponsiveContainer,
	Label
} from 'recharts';

import convertName from '../../../services/convertTeamName';

//styles
const Div = styled.div`
	display: flex;

	margin: 0;

	* {
		margin: 0;
	}

	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
	}
`;

const TeamRecordChart = ({ teamRecordData, team, primaryColor, secondaryColor }) => {
	const data = [
		{
			season: '2013',
			'Points Per Game': teamRecordData[convertName(team)].seasons[0].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[0].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[0].wins
		},
		{
			season: '2014',
			'Points Per Game': teamRecordData[convertName(team)].seasons[1].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[1].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[1].wins
		},
		{
			season: '2015',
			'Points Per Game': teamRecordData[convertName(team)].seasons[2].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[2].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[2].wins
		},
		{
			season: '2016',
			'Points Per Game': teamRecordData[convertName(team)].seasons[3].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[3].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[3].wins
		},
		{
			season: '2017',
			'Points Per Game': teamRecordData[convertName(team)].seasons[4].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[4].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[4].wins
		},
		{
			season: '2018',
			'Points Per Game': teamRecordData[convertName(team)].seasons[5].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[5].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[5].wins
		},
		{
			season: '2019',
			'Points Per Game': teamRecordData[convertName(team)].seasons[6].pointsFor / 14,
			'Points Against Per Game': teamRecordData[convertName(team)].seasons[6].pointsAgainst / 14,
			Wins: teamRecordData[convertName(team)].seasons[6].wins
		}
	];

	return (
		<Div>
			<ResponsiveContainer width="100%" height={500}>
				<ComposedChart data={data}>
					<XAxis dataKey="season" stroke="#000000" />
					<YAxis type="number" domain={[ 75, 165 ]} orientation="right" yAxisId="left" stroke="#000000" />
					<YAxis type="number" domain={[ 0, 14 ]} orientation="left" yAxisId="right" stroke="#000000" />
					<Tooltip formatter={(value, name, props) => [ `${Math.floor(value)}`, name ]} />
					<Legend />
					<CartesianGrid stroke={primaryColor} fill="#FFFFFF" />
					<ReferenceLine y={130.7} stroke="green" strokeDasharray="3 3" yAxisId="left">
						<Label stroke="green" position="right">
							80th %
						</Label>
					</ReferenceLine>
					<ReferenceLine y={119.6} stroke="black" strokeDasharray="3 3" yAxisId="left" />
					<ReferenceLine y={110} stroke="red" strokeDasharray="3 3" yAxisId="left">
						<Label stroke="red" position="right">
							20th %
						</Label>
					</ReferenceLine>
					<Bar dataKey="Wins" barSize={20} fill={primaryColor} yAxisId="right" />
					<Line type="monotone" dataKey="Points Per Game" stroke="#17b978" yAxisId="left" />
					<Line type="monotone" dataKey="Points Against Per Game" stroke="red" yAxisId="left" />
				</ComposedChart>
			</ResponsiveContainer>
		</Div>
	);
};

export default TeamRecordChart;
