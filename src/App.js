import React, { useState } from 'react';
import Gameplay from './Components/Gameplay';
import AllAlbums from './Components/AllAlbums';
import './styles/App.scss';

function App() {
	const [status, setStatus] = useState('game');

	function showAllAbums() {
		setStatus('display');
	}

	function gameMode() {
		setStatus('game');
	}

	return (
		<div className='App'>
			<div className='header'>
				<div className='all-albums' onClick={showAllAbums}>
					All Albums
				</div>
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
