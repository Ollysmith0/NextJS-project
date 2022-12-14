// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

const API_URL = process.env.API_URL;

type Data = {
	name: string;
};

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	return new Promise((resolve) => {
		
		//convert cookie to header authorization
		const cookies = new Cookies(req, res);
		const access_token = cookies.get('access_token');
		
		if(access_token) {
			req.headers.authorization = `Bearer ${access_token}`;
		}
		
		//do not send cookie to API server
		req.headers.cookie = '';
		
		proxy.web(req, res, {
			target: API_URL,
			changeOrigin: true,
			selfHandleResponse: false,
		});

		proxy.once('proxyRes', () => {
			resolve(true);
		});
	});
}
