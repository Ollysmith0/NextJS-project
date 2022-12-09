import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { MainLayout } from './components/layout';

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
	const router = useRouter();

	return (
		<div>
			<Link legacyBehavior href="/about">
				<a style={{ color: 'red' }}>About</a>
			</Link>
		</div>
	);
}

HomePage.Layout = MainLayout;
