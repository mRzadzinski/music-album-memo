import Gameplay from './Components/Gameplay';
import './styles/App.scss';

function App() {
	return (
		<div className='App'>
			<div className='header'>
				<div className='all-albums'>All Albums</div>
				<div className='title'>Music &nbsp; Album &nbsp; Memo</div>
				<div className='empty'></div>
			</div>

				<Gameplay />
		</div>
	);
}

export default App;
