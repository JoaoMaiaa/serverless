import { VercelRequest, VercelResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db

async function connect(uri: string) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)
  const dbName = 'news'
  const db = client.db(dbName)
  cachedDb = db
  return db
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { email } = req.body
  const db = await connect(`${process.env.MONGO_URL}`)
  const collection = db.collection('subscribers')

  await collection.insertOne({
    email,
    sbuscribedAt: new Date()
  })
  res.status(201).json({ ok: true })
}
