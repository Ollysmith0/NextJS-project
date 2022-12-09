import { LayoutProps } from 'models/common';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
	return (
		<>
			<div>
				<h1>Main layout</h1>
				<div>Side bar</div>
			</div>

			<Link legacyBehavior href="/">
				<a>Home</a>
			</Link>
			<Link legacyBehavior href="/about">
				<a>About</a>
			</Link>
			<div>{children}</div>
		</>
	);
}
