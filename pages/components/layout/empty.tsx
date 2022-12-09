import { LayoutProps } from 'pages/models/common';

export function EmptyLayout({ children }: LayoutProps) {
	return (
		<>
			<div>{children}</div>
		</>
	);
}
