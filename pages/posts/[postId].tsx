import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IDetailPostPageProps {
	post: any;
}

export default function DetailPostPage({ post }: IDetailPostPageProps) {
	if (!post) return null;

	return (
		<div>
			Post Detail
			<p>{post.id}</p>
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const posts = await response.json();
	const { data } = posts;

	console.log('get static paths');

	return {
		paths: data.map((item: any) => ({
			params: {
				postId: item.id,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	//server-side
	//npm run build
	console.log('get static props', context.params?.postId);
	const postId = context.params?.postId;
	if (!postId)
		return {
			notFound: true,
		};

	const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
	const data = await response.json();

	return {
		props: {
			post: data,
		},
	};
};
