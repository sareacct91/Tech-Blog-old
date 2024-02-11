const { User } = require('../models');

const data = [
  {
    name: 'person1',
    password: 'password1'
  },
  {
    name: 'person2',
    password: 'password2'
  },
  {
    name: 'person3',
    password: 'password3'
  },
  {
    name: 'person4',
    password: 'password4'
  },
  {
    name: 'person5',
    password: 'password5'
  }
];

async function userSeed() {
  await User.bulkCreate(data);
};

module.exports = userSeed();