import React, { useState } from 'react';
import Gameplay from './Components/Gameplay';
import AllAlbums from './Components/AllAlbums';
import './styles/App.scss';

function App() {
	const [status, setStatus] = useState('game');

	function showAllAlbums() {
		setStatus('display');
	}

	function gameMode() {
		setStatus('game');
	}

	const linkToAllAlbums = (
		<div className='all-albums' onClick={showAllAlbums}>
			All Albums
		</div>
	);
	const linkToGame = (
		<div className='all-albums' onClick={gameMode}>
			Play game
		</div>
	);

	return (
		<div className='App'>
			<div className='header'>
				{status === 'game' ? linkToAllAlbums : linkToGame}
				<div className='title' onClick={gameMode}>
					Music &nbsp; Album &nbsp; Memo
				</div>
				<div className='empty'></div>
			</div>

			{status === 'game' ? <Gameplay /> : <AllAlbums />}
		</div>
	);
}

export default App;
