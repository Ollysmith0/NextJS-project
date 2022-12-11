// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';

const API_URL = process.env.API_URL;

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  proxy.web(req, res, {
    target: API_URL,
    changeOrigin: true,
    selfHandleResponse: false
  })
}
 