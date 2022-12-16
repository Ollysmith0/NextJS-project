import * as React from 'react';
import { StudentDetail } from './components/swr';

export interface SWRPageProps {}

export default function SWRPage(props: SWRPageProps) {
	return (
		<div>
			SWR playground
			<h1>Student Details:</h1>
			<ul>
				<li key={'1'}>
					<StudentDetail studentId="lea2aa9l7x3a5v0" />
				</li>
				<li key={'2'}>
					<StudentDetail studentId="lea2aa9l7x3a5v0" />
				</li>
				<li key={'3'}>
					<StudentDetail studentId="lea2aa9l7x3a5v0" />
				</li>
			</ul>
		</div>
	);
}
