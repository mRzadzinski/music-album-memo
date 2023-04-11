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
		img: images['a-seat-at-the-table.jpeg'],
		title: 'A Seat at the Table',
		artist: 'Solange',
	},
	{
		img: images['anyway-the-wind-blows.jpeg'],
		title: 'The Anthology',
		artist: 'J.J. Cale',
	},
	{
		img: images['at-last.jpeg'],
		title: 'At Last',
		artist: 'Etta James',
	},
	{
		img: images['aventine.jpeg'],
		title: 'Aventine',
		artist: 'Agnes Obel',
	},
	{
		img: images['bamba.jpeg'],
		title: 'Bamba',
		artist: 'Orchestra Baobab',
	},
	{
		img: images['band-of-gypsys.jpeg'],
		title: 'Band of Gypsys',
		artist: 'Jimi Hendrix',
	},
	{
		img: images['buena-vista.jpeg'],
		title: 'Buena Vista Social Club',
		artist: 'Buena Vista Social Club',
	},
	{
		img: images['darkside-live.jpeg'],
		title: 'PSYCHIC LIVE JULY 17 2014',
		artist: 'DARKSIDE',
	},
	{
		img: images['deru-1979.jpeg'],
		title: '1979',
		artist: 'Deru',
	},
	{
		img: images['dire-straits.jpeg'],
		title: 'Dire Straits',
		artist: 'Dire Straits',
	},
	{
		img: images['electric-ladyland.jpeg'],
		title: 'Electric Ladyland',
		artist: 'The Jimi Hendrix Experience',
	},
	{
		img: images['engravings.jpeg'],
		title: 'Engravings',
		artist: 'Forest Swords',
	},
	{
		img: images['hidden-sky.jpeg'],
		title: 'Hidden Sky',
		artist: 'Jami Sieber',
	},
	{
		img: images['if-you wait.jpg'],
		title: 'If You Wait',
		artist: 'London Grammar',
	},
	{
		img: images['inner-speaker.jpeg'],
		title: 'Innerspeaker',
		artist: 'Tame Impala',
	},
	{
		img: images['jazz-impressions.jpg'],
		title: 'Jazz Impressions of Japan',
		artist: 'The Dave Brubeck Quartet',
	},
	{
		img: images['jazz-pa-svenska.jpeg'],
		title: 'Jazz på svenska',
		artist: 'Jan Johansson',
	},
	{
		img: images['jelinek.jpeg'],
		title: 'Loop-Finding-Jazz-Records',
		artist: 'Jan Jelinek',
	},
	{
		img: images['justice.jpg'],
		title: 'Justice',
		artist: 'Justice',
	},
	{
		img: images['live-in-maui.jpg'],
		title: 'Live in Maui',
		artist: 'The Jimi Hendrix Experience',
	},
	{
		img: images['norman-fucking-rockwell.jpeg'],
		title: 'Norman Fucking Rockwell!',
		artist: 'Lana Del Rey',
	},
	{
		img: images['on.jpeg'],
		title: 'On',
		artist: 'Altın Gün',
	},
	{
		img: images['pirates-choice.jpg'],
		title: "Pirate's Choice",
		artist: 'Orchestra Baobab',
	},
	{
		img: images['psycho-tropical.jpg'],
		title: 'La Femme',
		artist: 'Psycho Tropical Berlin',
	},
	{
		img: images['road-to-knowhere.jpeg'],
		title: 'Road to Knowhere',
		artist: 'Tommy Guerrero',
	},
	{
		img: images['solstafir-otta.jpeg'],
		title: 'Ótta',
		artist: 'Sólstafir',
	},
	{
		img: images['sputnik-korolev.jpeg'],
		title: 'Sputnik / Korolev',
		artist: 'Public Service Broadcasting',
	},
	{
		img: images['the-doors.jpg'],
		title: 'The Doors',
		artist: 'The Doors',
	},
	{
		img: images['time-out.jpeg'],
		title: 'Time Out',
		artist: 'The Dave Brubeck Quartet',
	},
	{
		img: images['what-id-say.jpg'],
		title: "What I'd say",
		artist: 'Ray Charles',
	},
];

export default albums;
