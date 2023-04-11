import '../styles/AllAlbums.scss';
import albums from '../albums-data';
import Card from './Card';

const AllAlbums = (props) => {
	return (

		<div className='AllAlbums'>
			<div className='score'></div>
			<div className='albums-game-container display'>
				<div className='albums-game'>
					{albums.map((album, index) => (
						<Card
							key={index}
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
