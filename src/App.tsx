import './App.css';
import BlobsBackground from './BlobsBackground';
import MainCardContents from './MainCardContents';
import Card from './Card';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<BlobsBackground />
				<Card width="90vw" height="90vh" shadowBlur="80px" maxWidth="1400px" snapThreshold="800px">
					<MainCardContents />
				</Card>
			</div>
		</Router>
	);
}

export default App;
