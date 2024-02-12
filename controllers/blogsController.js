const Blog = require('../models/Blog');
const { BadRequestError } = require('../utils/errors');

function renderNewBlog(req, res) {
  res.render('new-blog');
}

async function createBlog(req, res) {
  const { title, content } = req.body;

  if (!(title && content)) {
    throw new BadRequestError('Missing Title or Content of the Blog');
  }

  const { user_id } = req.session;
  console.log('\n', user_id, '\n');

  const blog = (await Blog.create({ title, content })).toJSON();
  console.log('\n', blog, '\n');


};

async function getBlog(req, res) {

}

module.exports = {
  createBlog,
  getBlog,
  renderNewBlog,

}
