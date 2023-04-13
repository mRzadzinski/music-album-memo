import '../styles/Gameplay.scss';
import albums from '../albums-data';
import Card from './Card';
import React, { useEffect, useRef, useState } from 'react';

const Gameplay = (props) => {
	const [score, setScore] = useState(0);
	const [albumsDeck, setAlbumsDeck] = useState(getAlbumsDeck());
	const [defaultCursor, setDefaultCursor] = useState('');
	const instruction = useRef(null);

	function getAlbumsDeck() {
		const tempDeck = [];
		while (tempDeck.length < 12) {
			let album = albums[Math.floor(Math.random() * albums.length)];

			if (!tempDeck.includes(album)) {
				tempDeck.push(album);
			}
		}
		return tempDeck;
	}

	function shuffleDeck() {
		const tempDeck = [];
		albumsDeck.forEach((album) => tempDeck.push(album));

		tempDeck.sort(() => (Math.random() > 0.5 ? 1 : -1));

		setAlbumsDeck(tempDeck);
	}

	function showInstruction() {
		instruction.current.style.display = 'flex';
	}

	function hideInstruction() {
		instruction.current.style.display = 'none';
	}

	return (
		<div className='Gameplay'>
			<div className='score'>
				<span
					className='material-symbols-outlined'
					id='info-icon'
					onMouseEnter={showInstruction}
					onMouseLeave={hideInstruction}
				>
					<div className='instruction' ref={instruction}>
						Click each card only once.
					</div>
					info
				</span>
				&nbsp;Score {score}/12
			</div>

			<div className='albums-game-container'>
				<div className='albums-game'>
					{albumsDeck.map((album, index) => (
						<Card
							defaultCursor={defaultCursor}
							key={album.id}
							img={album.img}
							title={album.title}
							artist={album.artist}
						/>
					))}
				</div>
			</div>

			<div className='restart-container'>
				<button className='btn-restart' onClick={shuffleDeck}>
					Restart
				</button>
			</div>
		</div>
	);
};

export default Gameplay;
