const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userdata = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345"
    }
  ]
const postdata = [
    {
      "title": "Title1",
      "body": "bacon pancakes",
      "user_id": 1
    },
    {
        "title": "title2",
        "body": "blah",
        "user_id": 2
    }
  ]

const commentdata = [
    {
      "body": "bacon pancakes",
      "user_id": 1
    },
    {
        "body": "blah",
        "user_id": 2
    }
  ]

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postdata);

  const comments = await Comment.bulkCreate(commentdata);


  process.exit(0);
};

seedDatabase();