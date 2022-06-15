import { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name } = req.query
  res.status(200).send({ name: `Olá ${name}` })
}
