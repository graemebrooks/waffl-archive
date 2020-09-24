import React from 'react';
import { ComposableMap, Geographies, Geography, Graticule, Marker } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const teamLocations = {
	islanders: [
		{ markerOffset: 15, name: 'Lubbock', coordinates: [ -101.8552, 33.5779 ] },
		{ markerOffset: 15, name: 'Central Texas', coordinates: [ -97.7431, 30.2672 ] }
	],
	iceBabies: [
		{ markerOffset: 15, name: 'Lubbock', coordinates: [ -101.8552, 33.5779 ] },
		{ markerOffset: 15, name: 'Cedar Park', coordinates: [ -97.7431, 30.2672 ] }
	],
	cartels: [
		{ markerOffset: 15, name: 'El Paso', coordinates: [ -106.485, 31.7619 ] },
		{ markerOffset: 15, name: 'Cypress Mill', coordinates: [ -97.7431, 30.2672 ] }
	],
	beer: [
		{ markerOffset: 15, name: 'Austin', coordinates: [ -97.7431, 30.2672 ] },
		{ markerOffset: 15, name: 'Los Angeles', coordinates: [ -118.24371, 34.0522 ] }
	],
	wenches: [
		{ markerOffset: 15, name: 'Champaign', coordinates: [ -88.2434, 40.1164 ] },
		{ markerOffset: 15, name: 'Fort Sill', coordinates: [ -98.41841, 34.5938 ] },
		{ markerOffset: 15, name: 'Wrigleyville', coordinates: [ -87.6555, 41.4821 ] }
	],
	digitalRays: [
		{ markerOffset: 15, name: 'College Station', coordinates: [ -96.3344, 30.628 ] },
		{ markerOffset: 15, name: 'Rock Rose', coordinates: [ -97.7431, 30.2672 ] }
	],
	notTheJets: [ { markerOffset: 15, name: 'University of Texas', coordinates: [ -97.7431, 30.2672 ] } ],
	chiliPeppers: [
		{ markerOffset: 15, name: 'Canyon Creek', coordinates: [ -97.7431, 30.2672 ] },
		{ markerOffset: 15, name: 'California', coordinates: [ -118.24371, 34.0522 ] }
	],
	toadLickers: [
		{ markerOffset: 15, name: 'South Lubbock', coordinates: [ -101.8552, 33.5779 ] },
		{ markerOffset: 15, name: 'Travis County', coordinates: [ -97.7431, 30.2672 ] }
	],
	nadoes: [
		{ markerOffset: 15, name: 'Stillwater', coordinates: [ -97.0584, 36.1156 ] },
		{ markerOffset: 15, name: 'Wichita Falls', coordinates: [ -98.4934, 33.9137 ] }
	],
	librarians: [ { markerOffset: 15, name: 'San Marcos', coordinates: [ -97.9414, 29.8833 ] } ]
};

let markers = [];

const MapChart = ({ primary, secondary, team }) => {
	switch (team) {
		case 'Cartels':
			markers = teamLocations.cartels;
			break;
		case 'Beer':
			markers = teamLocations.beer;
			break;
		case 'Ice Babies':
			markers = teamLocations.iceBabies;
			break;
		case 'Islanders':
			markers = teamLocations.islanders;
			break;
		case 'Wenches':
			markers = teamLocations.wenches;
			break;
		case 'Toad Lickers':
			markers = teamLocations.toadLickers;
			break;
		case 'Chili Peppers':
			markers = teamLocations.chiliPeppers;
			break;
		case 'Digital Rays':
			markers = teamLocations.digitalRays;
			break;
		case 'Not The Jets':
			markers = teamLocations.notTheJets;
			break;
		case 'Nadoes':
			markers = teamLocations.nadoes;
			break;
		case 'Librarians':
			markers = teamLocations.librarians;
			break;
	}

	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [ 95.0, -40.0, 0 ],
				scale: 900
			}}
		>
			<Graticule stroke="#EAEAEC" />
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies
						.filter((d) => d.properties.REGION_UN === 'Americas')
						.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill={primary} stroke="#D6D6DA" />)}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<g
						fill="none"
						stroke={secondary}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						transform="translate(-12, -24)"
					>
						<circle cx="12" cy="10" r="3" />
						<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
					</g>
					<text textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui', fill: '#FFFFFF' }}>
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
	);
};

export default MapChart;
