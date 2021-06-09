import { connectToDatabase } from '../utils/mongodb';

export default class PostsDAO {
    static async getAllPosts() {
        const { db } = await connectToDatabase();

        const posts = await db.collection('Post').find().toArray();

        return posts;
    }
}