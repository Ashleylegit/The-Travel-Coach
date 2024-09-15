import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = client.db();
const collection = db.collection('destinations');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const destinations = await collection.find().toArray();
    res.status(200).json(destinations);
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}