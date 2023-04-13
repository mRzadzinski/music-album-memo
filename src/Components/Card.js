import '../styles/Card.scss';
import albums from '../albums-data';
import React from 'react';

console.log(albums)

const Card = (props) => {
	const { img, title, artist, defaultCursor } = props;

    // cursor = ' default-cursor';

	return (
		<div className={`Card${defaultCursor}`}>
			<img className='album-cover' src={img} alt='' />
			<div className='album-title'>{title}</div>
			<div className='artist'>{artist}</div>
		</div>
	);
};

export default Card;
