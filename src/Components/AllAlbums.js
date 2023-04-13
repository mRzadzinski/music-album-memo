import '../styles/AllAlbums.scss';
import albums from '../albums-data';
import Card from './Card';
import React, { useState } from 'react';

const AllAlbums = (props) => {
	// const [defaultCursor, setDefaultCursor] = useState(' default-cursor');
	const [cardsDisabled, setCardsDisabled] = useState(true);

	return (
		<div className='AllAlbums display'>
			<div className='albums-game-container' >
				<div className='albums-game' id='display-all'>
					{albums.map((album, index) => (
						<Card
							cardsDisabled={cardsDisabled}
							key={albums[index].id}
							img={albums[index].img}
							title={albums[index].title}
							artist={albums[index].artist}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllAlbums;
