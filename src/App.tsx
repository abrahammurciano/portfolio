import './App.css';
import BlobsBackground from './BlobsBackground';
import MainCardContents from './MainCardContents';
import Card from './Card';

function App() {
	return (
		<div className="App">
			<BlobsBackground />
			<Card width="90vw" height="90vh" shadowBlur="80px" maxWidth="1400px" snapThreshold="800px">
				<MainCardContents />
			</Card>
		</div>
	);
}

export default App;
