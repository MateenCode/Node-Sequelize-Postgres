const db = require('./models')


//Create

// db.user.create({
//     firstName: 'Mateen',
//     lastName: 'Kazia',
//     age: 24
// }).then(createdUser=>{
//     // the create promise returns the
//     // new row of data that has been created
//     // (otherwise it throws an error)
//     console.log(createdUser)
// })

//Read One

// db.user.findOne({
//     where: {firstName: 'Mateen'}
// }).then(foundUser=>{
//     console.log(foundUser)
// })

//Find or Create

// db.user.findOrCreate({
//     where: {
//       firstName: 'Taylor',
//       lastName: 'Darneille'
//     },
//     defaults: { age: 88 }
//   }).then(([user, created])=>{
//     console.log(user); // returns info about the user
//   });

//Find All

db.user.findAll().then((users) => {
  console.log(users);
  // users will be an array of all User instances
});


//Update

// db.user
//   .update(
//     {
//       lastName: "Taco",
//     },
//     {
//       where: {
//         firstName: "Brian",
//       },
//     }
//   )
//   .then((numRowsChanged) => {
//     console.log(numRowsChanged);
//   });

// Delete (destroy)

// db.user.destroy({
//   where: { firstName: 'Brian' }
// }).then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
//   // do something when done deleting
// });







