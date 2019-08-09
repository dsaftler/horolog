// const where = {
//   'city.country.id': 1
// };

// Office.findAll({ where, include: [{ all: true, nested: true }] });
// /*
// Company.findAll({ include: [Division], order: [[Division, 'name']] });
// Company.findAll({ include: [Division], order: [[Division, 'name', 'DESC']] });
// Company.findAll({
//   include: [{ model: Division, as: 'Div' }],
//   order: [[{ model: Division, as: 'Div' }, 'name']]
// });
// Company.findAll({
//   include: [{ model: Division, include: [Department] }],
//   order: [[Division, Department, 'name']]
// });
// // In the case of many-to-many joins, you are also able to sort by attributes in the through table.
// Company.findAll({
//   include: [{ model: Division, include: [Department] }],
//   order: [[Division, DepartmentDivision, 'name']]
// });

// User.findAll({
//   include: [
//     {
//       model: Tool, as: 'Instruments', include: [
//         { model: Teacher, include: [ /* etc */] }
//       ]
//     }
//   ]

// /*}).success(function (users) {
//   console.log(JSON.stringify(users))

//   /*
//     [{
//       "name": "John Doe",
//       "id": 1,
//       "createdAt": "2013-03-20T20:31:45.000Z",
//       "updatedAt": "2013-03-20T20:31:45.000Z",
//       "instruments": [{ // 1:M and N:M association
//         "name": "Toothpick",
//         "id": 1,
//         "createdAt": null,
//         "updatedAt": null,
//         "UserId": 1,
//         "Teacher": { // 1:1 association
//           "name": "Jimi Hendrix"
//         }
//       }]
//     }]
//   }) 
//  */
