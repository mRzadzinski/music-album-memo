import '../styles/Card.scss';
import albums from '../albums-data';
import React, { useEffect, useRef } from 'react';

const Card = (props) => {
	const {
		img,
		title,
		artist,
		cardsDisabled,
		resetScore,
		incrementScore,
		shuffleDeck,
	} = props;

	const card = useRef(null);

	useEffect(() => {
		if (cardsDisabled) {
			card.current.style.cursor = 'default';
		} else {
			card.current.style.cursor = 'pointer';
		}
	});

	function noteCardClick() {
		albums.forEach((album) => {
			if (album.title === title) {
				if (!album.clicked) {
					album.clicked = true;
					incrementScore();
				} else {
					resetScore();
				}
			}
		});
	}

	return (
		<div
			className='Card'
			ref={card}
			onClick={() => {
				if (cardsDisabled) {
					return;
				} else {
					noteCardClick();
					shuffleDeck();
				}
			}}
		>
			<img className='album-cover' src={img} alt='' />
			<div className='album-title'>{title}</div>
			<div className='artist'>{artist}</div>
		</div>
	);
};

export default Card;
