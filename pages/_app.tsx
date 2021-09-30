import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useRef } from "react";
import BlobsBackground from "../components/BlobsBackground";
import MainCardContents from "../components/MainCardContents";
import FullScreenCard from "../components/FullScreenCard";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const pageComponentRef = useRef<HTMLDivElement>(null);
	useEffect(() => pageComponentRef.current?.scrollIntoView(), [router.route]);

	return (
		<div>
			<BlobsBackground />
			<FullScreenCard width="90vw" height="90vh" shadowBlur="80px" maxWidth="1400px" snapThreshold={800}>
				<MainCardContents>
					<div ref={pageComponentRef}>
						<Component {...pageProps} />
					</div>
				</MainCardContents>
			</FullScreenCard>
		</div>
	);
}
export default MyApp;
