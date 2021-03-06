import connectToDatabase from '@geekson/mongodb-connector';

export default class PostsDAO {
    static async getAllPosts() {
        const { db } = await connectToDatabase();

        return await db.collection('Post').find().toArray();
    }

    static async createPost(post) {
        const { db } = await connectToDatabase();

        return await db.collection('Post').insertOne(post);
    }
}