// accesses database
const db = require('../models')
async function emailExists(email) {
  // prevent duplicate of email
  // return use if exists, false if not taken
  if (email === null || email === undefined) {
    throw new Error('No email was passed in')}
  const user = await db.user.findOne({
    where: {email}
  });
  
  if (user) {return user};
  
  return false;
}

async function findUserById(userId) {
  if(!userId) throw new Error('Invalid arg: UserId');
  const user = await db.users.findOne({
    where: {id: userId}
  });
  if(user) {return user};
 
  return null;
}

module.exports = {emailExists, findUserById};
