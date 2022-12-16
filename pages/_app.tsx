import '../styles/globals.css';
import { AppPropsWithLayout } from 'models';
import { EmptyLayout } from './components/layout';
import { SWRConfig } from 'swr';
import { axiosClient } from 'axios-client';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
}
