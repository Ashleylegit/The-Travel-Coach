import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const db = client.db();
const collection = db.collection('blog-posts');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = await collection.find().toArray();
    res.status(200).json(posts);
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
