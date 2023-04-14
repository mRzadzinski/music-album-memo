import '../styles/AllAlbums.scss';
import albums from '../albums-data';
import Card from './Card';
import React, { useState } from 'react';

const AllAlbums = () => {
	const [cardsDisabled] = useState(true);

	return (
		<div className='albums-game-container display'>
			<div className='albums-game' id='display-all'>
				{albums.map((album) => (
					<Card
						cardsDisabled={cardsDisabled}
						key={album.id}
						img={album.img}
						title={album.title}
						artist={album.artist}
					/>
				))}
			</div>
		</div>
	);
};

export default AllAlbums;
