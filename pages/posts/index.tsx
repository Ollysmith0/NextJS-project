import * as React from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

export interface IPostPageProps {
	posts: any[];
}

export default function PostPage({ posts }: IPostPageProps) {
	return (
		<div>
			Posts Page:
			<ul>
				{posts.map((item: any) => (
					<li key={item.id}>
						<Link legacyBehavior href={`/posts/${item.id}`}>
							<a>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export const getStaticProps: GetStaticProps<IPostPageProps> = async (
	context: GetStaticPropsContext
) => {
	//server-side
	//npm run build

	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const posts = await response.json();
	const { data } = posts;

	return {
		props: {
			posts: data.map((item: any) => ({ id: item.id, title: item.title })),
		},
	};
};
