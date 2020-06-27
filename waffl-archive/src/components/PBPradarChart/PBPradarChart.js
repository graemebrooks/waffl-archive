import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

//styles
const Div = styled.div`@media (max-width: 480px) {}`;

const positionMaximums = {
	qbMax: 21.71,
	rbMax: 14.87,
	wrMax: 14.96,
	teMax: 12.63,
	kMax: 9.47,
	defMax: 9.63
};

const PBPRadarChart = ({ PBPData, primaryColor, team }) => {
	const data = [
		{
			position: 'QB',
			A: PBPData.qb / positionMaximums.qbMax * 100,
			fullMark: 120
		},
		{
			position: 'RB',
			A: PBPData.rb / positionMaximums.rbMax * 100,
			fullMark: 2913
		},
		{
			position: 'WR',
			A: PBPData.wr / positionMaximums.wrMax * 100,
			fullMark: 4397
		},
		{
			position: 'TE',
			A: PBPData.te / positionMaximums.teMax * 100,
			fullMark: 1168
		},
		{
			position: 'K',
			A: PBPData.k / positionMaximums.kMax * 100,
			fullMark: 928
		},
		{
			position: 'DEF',
			A: PBPData.def / positionMaximums.defMax * 100,
			fullMark: 944
		}
	];

	// for

	return (
		<Div>
			<RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data} stroke="#383838">
				<Radar name="Team" dataKey="A" stroke="#383838" fill={primaryColor} fillOpacity={0.7} />
				<Tooltip
					formatter={(value, name, props) => [ `${Math.floor(value)}%`, `${team}` ]}
					labelStyle={{ color: `${primaryColor}` }}
					itemStyle={{ margin: 0, color: `${primaryColor}` }}
				/>
				<PolarGrid stroke="#383838" />
				<PolarAngleAxis dataKey="position" />
				<PolarRadiusAxis angle={30} domain={[ 40, 100 ]} stroke="#383838" />
			</RadarChart>
		</Div>
	);
};

export default PBPRadarChart;
