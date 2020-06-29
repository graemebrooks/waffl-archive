export default function convertName(unformattedName) {
	let formattedName;

	switch (unformattedName) {
		case 'Cartels':
			formattedName = 'cartels';
			break;
		case 'Beer':
			formattedName = 'beer';
			break;
		case 'Ice Babies':
			formattedName = 'iceBabies';
			break;
		case 'Islanders':
			formattedName = 'islanders';
			break;
		case 'Wenches':
			formattedName = 'wenches';
			break;
		case 'Toad Lickers':
			formattedName = 'toadLickers';
			break;
		case 'Chili Peppers':
			formattedName = 'chiliPeppers';
			break;
		case 'Digital Rays':
			formattedName = 'digitalRays';
			break;
		case 'Not The Jets':
			formattedName = 'notTheJets';
			break;
		case 'Nadoes':
			formattedName = 'nadoes';
			break;
		case 'Librarians':
			formattedName = 'librarians';
			break;
	}

	return formattedName;
}
