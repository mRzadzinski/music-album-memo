import '../styles/Gameplay.scss';
import albums from '../albums-data';
import Card from './Card';

const Gameplay = (props) => {
	const albumsArray = Array(12).fill(<Card />);
	console.log(albumsArray);

	return (
		<div className='Gameplay'>
			<div className='score'>Score 0/12</div>

			<div className='albums-game-container'>
				<div className='albums-game'>
					{albumsArray.map((album, index) => (
						<Card
							img={albums[index].img}
							title={albums[index].title}
							artist={albums[index].artist}
						/>
					))}
				</div>
			</div>

			<div className='restart-container'>
				<button className='btn-restart'>Restart</button>
			</div>
		</div>
	);
};

export default Gameplay;
