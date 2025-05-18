//CRUD Operations
use("Cruddb")
db.createCollection("courses");
// db.cousres.insertOne({
//     "name":"devarshwebdev",
//     "price":0,
//     "assing":12,
//     "projects":45
// })
// //CREATE
// db.cousres.insertMany([
//     {
//       "name": "devarshwebdev",
//       "price": 0,
//       "assing": 12,
//       "projects": 45
//     },
//     {
//       "name": "webdevmaster",
//       "price": 10,
//       "assing": 15,
//       "projects": 38
//     },
//     {
//       "name": "codecrafter101",
//       "price": 5,
//       "assing": 9,
//       "projects": 50
//     },
//     {
//       "name": "devdreamer",
//       "price": 0,
//       "assing": 20,
//       "projects": 60
//     },
//     {
//       "name": "frontendforce",
//       "price": 8,
//       "assing": 14,
//       "projects": 42
//     },
//     {
//       "name": "backendboss",
//       "price": 0,
//       "assing": 10,
//       "projects": 30
//     },
//     {
//       "name": "fullstackninja",
//       "price": 12,
//       "assing": 11,
//       "projects": 48
//     },
//     {
//       "name": "techtonic_dev",
//       "price": 6,
//       "assing": 13,
//       "projects": 33
//     },
//     {
//       "name": "codestreaker",
//       "price": 3,
//       "assing": 17,
//       "projects": 41
//     },
//     {
//       "name": "devarshplus",
//       "price": 0,
//       "assing": 18,
//       "projects": 55
//     }
//   ]
//   )
  //READ
// let a= db.cousres.find({price:0})
// console.log(a.toArray())
// console.log(a.count())


//UPDATE
db.cousres.updateOne({price:0},{$set:{price:100}})
db.cousres.updateMany({price:0},{$set:{price:1000}})
