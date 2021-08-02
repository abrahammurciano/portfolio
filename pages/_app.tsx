import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import BlobsBackground from '../components/BlobsBackground';
import MainCardContents from '../components/MainCardContents';
import Card from '../components/Card';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<BlobsBackground />
			<Card width="90vw" height="90vh" shadowBlur="80px" maxWidth="1400px" snapThreshold={800}>
				<MainCardContents>
					<Component {...pageProps} />
				</MainCardContents>
			</Card>
		</div>
	);
}
export default MyApp
