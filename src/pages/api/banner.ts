import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

  res.status(200).json({ image:numeroAleatorio });
}