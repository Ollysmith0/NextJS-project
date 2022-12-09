import { LayoutProps } from 'models/common';
import Link from 'next/link';

export function AdminLayout({ children }: LayoutProps) {
	return (
		<>
			<div>
				<h1>Admin layout</h1>
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
