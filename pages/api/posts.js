import nc from 'next-connect';

import PostsDAO from '../../dao/postsDAO';

const getAllPosts = async() => {
    return await PostsDAO.getAllPosts();
}

const createPost = async(post) => {
    const { ops } = await PostsDAO.createPost(post);

    return ops;
}

const handler = nc()
    .get(async (req, res) => {
        res.json(await getAllPosts());
    })
    .post(async (req, res) => {
        const post = {
            title: 'Third post !',
            content: 'This is the third post ... coming from the API !',
            date: new Date(Date.now()).toISOString()
        };
        res.status(200).json(await createPost(post));
    });

export default handler;