import '../styles/Gameplay.scss';
import albums from '../albums-data';
import Card from './Card';

console.log(albums)


const Gameplay = (props) => {
	return (
		<div className='Gameplay'>
			<div className='score'>Score 0/12</div>

			<div className='albums-game-container'>
				<div className='card'>CONTENT</div>
			</div>

			<div className='restart-container'>
				<button className='btn-restart'>Restart</button>
			</div>
		</div>
	);
};

export default Gameplay;
