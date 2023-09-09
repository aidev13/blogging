const sequelize = require('./db/connection');
const { User, Post } = require('./models');

sequelize.sync({ force: true }).then(async () => {

    //creating users
    const user1 = await User.create({
        username: 'blogger101',
        password: 'abcd1234'
    });

    const user2 = await User.create({
        username: 'Lacey Renee',
        password: 'bishBaby'
    })

    //creating posts
    await Post.create({
        writtenPost: "Bacon is good for me. Bacon pancakes - making bacon pancakes, take the bacon put 'em in the pancakes - bacon pancakes that's what you're gonna make - BACON PANCAKES!"
    })

    //reading data
    // const poster = await Post.findAll({ raw: true })
    // const author = await User.findAll({ raw: true })

    //updating data
    await User.update({
        username: 'Jake the Dog'
    }, {
        where: {
            id: 1
        },
        raw: true,
    })

    //destroying data (deleting)





    const allUsers = await User.findAll({ raw: true })
    console.log(allUsers)

})

