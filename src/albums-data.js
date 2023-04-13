function importAllImages(obj) {
	const images = {};
	obj.keys().forEach((item) => {
		images[item.replace('./', '')] = obj(item);
	});
	return images;
}

const images = importAllImages(
	require.context('./img/', false, /\.(png|jpe?g)$/)
);

const albums = [
	{
		img: images['deru-1979.jpeg'],
		title: '1979',
		artist: 'Deru',
		clicked: false,
		id: 1,
	},
	{
		img: images['a-seat-at-the-table.jpeg'],
		title: 'A Seat at the Table',
		artist: 'Solange',
		clicked: false,
		id: 2,
	},
	{
		img: images['at-last.jpeg'],
		title: 'At Last',
		artist: 'Etta James',
		clicked: false,
		id: 3,
	},
	{
		img: images['aventine.jpeg'],
		title: 'Aventine',
		artist: 'Agnes Obel',
		clicked: false,
		id: 4,
	},
	{
		img: images['bamba.jpeg'],
		title: 'Bamba',
		artist: 'Orchestra Baobab',
		clicked: false,
		id: 5,
	},
	{
		img: images['band-of-gypsys.jpeg'],
		title: 'Band of Gypsys',
		artist: 'Jimi Hendrix',
		clicked: false,
		id: 6,
	},
	{
		img: images['buena-vista.jpeg'],
		title: 'Buena Vista Social Club',
		artist: 'Buena Vista Social Club',
		clicked: false,
		id: 7,
	},

	{
		img: images['dire-straits.jpeg'],
		title: 'Dire Straits',
		artist: 'Dire Straits',
		clicked: false,
		id: 8,
	},
	{
		img: images['electric-ladyland.jpeg'],
		title: 'Electric Ladyland',
		artist: 'The Jimi Hendrix Experience',
		clicked: false,
		id: 9,
	},
	{
		img: images['engravings.jpeg'],
		title: 'Engravings',
		artist: 'Forest Swords',
		clicked: false,
		id: 10,
	},
	{
		img: images['hidden-sky.jpeg'],
		title: 'Hidden Sky',
		artist: 'Jami Sieber',
		clicked: false,
		id: 11,
	},
	{
		img: images['if-you wait.jpg'],
		title: 'If You Wait',
		artist: 'London Grammar',
		clicked: false,
		id: 12,
	},
	{
		img: images['inner-speaker.jpeg'],
		title: 'Innerspeaker',
		artist: 'Tame Impala',
		clicked: false,
		id: 13,
	},
	{
		img: images['jazz-impressions.jpg'],
		title: 'Jazz Impressions of Japan',
		artist: 'The Dave Brubeck Quartet',
		clicked: false,
		id: 14,
	},
	{
		img: images['jazz-pa-svenska.jpeg'],
		title: 'Jazz på svenska',
		artist: 'Jan Johansson',
		clicked: false,
		id: 15,
	},
	{
		img: images['jelinek.jpeg'],
		title: 'Loop-Finding-Jazz-Records',
		artist: 'Jan Jelinek',
		clicked: false,
		id: 16,
	},
	{
		img: images['justice.jpg'],
		title: 'Justice',
		artist: 'Justice',
		clicked: false,
		id: 17,
	},
	{
		img: images['live-in-maui.jpg'],
		title: 'Live in Maui',
		artist: 'The Jimi Hendrix Experience',
		clicked: false,
		id: 18,
	},
	{
		img: images['norman-fucking-rockwell.jpeg'],
		title: 'Norman Fucking Rockwell!',
		artist: 'Lana Del Rey',
		clicked: false,
		id: 19,
	},
	{
		img: images['on.jpeg'],
		title: 'On',
		artist: 'Altın Gün',
		clicked: false,
		id: 20,
	},
	{
		img: images['pirates-choice.jpg'],
		title: "Pirate's Choice",
		artist: 'Orchestra Baobab',
		clicked: false,
		id: 21,
	},
	{
		img: images['darkside-live.jpeg'],
		title: 'PSYCHIC LIVE JULY 17 2014',
		artist: 'DARKSIDE',
		clicked: false,
		id: 22,
	},
	{
		img: images['psycho-tropical.jpg'],
		title: 'Psycho Tropical Berlin',
		artist: 'La Femme',
		clicked: false,
		id: 23,
	},
	{
		img: images['road-to-knowhere.jpeg'],
		title: 'Road to Knowhere',
		artist: 'Tommy Guerrero',
		clicked: false,
		id: 24,
	},
	{
		img: images['solstafir-otta.jpeg'],
		title: 'Ótta',
		artist: 'Sólstafir',
		clicked: false,
		id: 25,
	},
	{
		img: images['sputnik-korolev.jpeg'],
		title: 'Sputnik / Korolev',
		artist: 'Public Service Broadcasting',
		clicked: false,
		id: 26,
	},
	{
		img: images['anyway-the-wind-blows.jpeg'],
		title: 'The Anthology',
		artist: 'J.J. Cale',
		clicked: false,
		id: 27,
	},
	{
		img: images['the-doors.jpg'],
		title: 'The Doors',
		artist: 'The Doors',
		clicked: false,
		id: 28,
	},
	{
		img: images['time-out.jpeg'],
		title: 'Time Out',
		artist: 'The Dave Brubeck Quartet',
		clicked: false,
		id: 29,
	},
	{
		img: images['what-id-say.jpg'],
		title: "What I'd say",
		artist: 'Ray Charles',
		clicked: false,
		id: 30,
	},
];

export default albums;
