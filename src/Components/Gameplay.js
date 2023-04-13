import '../styles/Gameplay.scss';
import albums from '../albums-data';
import Card from './Card';
import React, { useEffect, useRef, useState } from 'react';

const Gameplay = () => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [albumsDeck, setAlbumsDeck] = useState(getAlbumsDeck());
	const [cardsDisabled, setCardsDisabled] = useState(false);

	const instruction = useRef(null);
	const scoreContainer = useRef(null);

	// Update best score
	// Finish game
	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
		}

		if (score === 10) {
			scoreContainer.current.classList.add('finished');
			setCardsDisabled(true);
		}
	}, [score]);

	function getAlbumsDeck() {
		const tempDeck = [];
		while (tempDeck.length < 10) {
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

	// jimi lana social innerspeaker bamba doors seat psychic live atLast otta on anthology

	function resetScore() {
		if (bestScore === 10) {
			setBestScore(0);
		}
		setScore(0);
		albums.forEach((album) => (album.clicked = false));
	}

	function restartGame() {
		setAlbumsDeck(getAlbumsDeck());
		resetScore();
		setBestScore(0);
		setCardsDisabled(false);
		scoreContainer.current.classList.remove('finished');
	}

	function incrementScore() {
		setScore(score + 1);
	}

	function showInstruction() {
		instruction.current.style.display = 'flex';
	}

	function hideInstruction() {
		instruction.current.style.display = 'none';
	}

	return (
		<div className='Gameplay'>
			<div className='score-container' ref={scoreContainer}>
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
					&nbsp;Score {score}/10
				</div>
				<div className='best-score'>Best Score: {bestScore}/10</div>
			</div>

			<div className='albums-game-container'>
				<div className='albums-game'>
					{albumsDeck.map((album, index) => (
						<Card
							shuffleDeck={shuffleDeck}
							resetScore={resetScore}
							incrementScore={incrementScore}
							cardsDisabled={cardsDisabled}
							key={album.id}
							img={album.img}
							title={album.title}
							artist={album.artist}
						/>
					))}
				</div>
			</div>

			<div className='restart-container'>
				<button className='btn-restart' onClick={restartGame}>
					New Deck
				</button>
			</div>
		</div>
	);
};

export default Gameplay;
