import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
    }

    //store in the database
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    //add mongodb connection
    let client = null;
    try {
      const apiUser = process.env.NEXT_PUBLIC_USERNAME;
      const apiKey = process.env.NEXT_PUBLIC_KEY;
      const clusterName = process.env.NEXT_PUBLIC_NAMESERVICE;
      const dbName = process.env.NEXT_PUBLIC_DB;
      const urlconnect =
        'mongodb+srv://' +
        apiUser +
        ':' +
        apiKey +
        '@' +
        clusterName +
        '/' +
        dbName +
        '?retryWrites=true&w=majority&appName=Cluster0';
      client = await MongoClient.connect(urlconnect);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'could not connect to db' });
      return;
    }
    const db = client.db();
    const blogsCollection = db.collection('messages');
    try {
      const result = await blogsCollection.insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.log('error2');
      console.log(error);
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }
    client.close();
    //ad mongodb connection
    console.log(newMessage);
    res
      .status(201)
      .json({ message: 'successfully stored message!', data: newMessage });
  }
}
export default handler;
