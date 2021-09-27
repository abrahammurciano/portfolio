import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react";
import BlobsBackground from "../components/BlobsBackground";
import MainCardContents from "../components/MainCardContents";
import FullScreenCard from "../components/FullScreenCard";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<BlobsBackground />
			<FullScreenCard width="90vw" height="90vh" shadowBlur="80px" maxWidth="1400px" snapThreshold={800}>
				<MainCardContents>
					<Component {...pageProps} />
				</MainCardContents>
			</FullScreenCard>
		</div>
	);
}
export default MyApp
