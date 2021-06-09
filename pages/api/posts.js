import nc from 'next-connect';

import PostsDAO from '../../dao/postsDAO';

const getAllPosts = async() => {
    return await PostsDAO.getAllPosts();
}

const handler = nc()
    .get(async (req, res) => {
        res.json(await getAllPosts());
    });

export default handler;