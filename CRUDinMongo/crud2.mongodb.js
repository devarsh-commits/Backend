use("crud2")
console.log(db);
db.createCollection("info");
db.info.insertOne({
    "name":"devarsh",
    "status":"single"
});
// db.info.insertMany([
//   {
//     "name": "devarsh",
//     "status": "single"
//   },
//   {
//     "name": "anaya",
//     "status": "married"
//   },
//   {
//     "name": "ravi",
//     "status": "single"
//   },
//   {
//     "name": "meera",
//     "status": "divorced"
//   },
//   {
//     "name": "arjun",
//     "status": "engaged"
//   },
//   {
//     "name": "isha",
//     "status": "single"
//   },
//   {
//     "name": "tanmay",
//     "status": "complicated"
//   },
//   {
//     "name": "sana",
//     "status": "widowed"
//   },
//   {
//     "name": "karthik",
//     "status": "married"
//   },
//   {
//     "name": "priya",
//     "status": "single"},]
// )
let a=db.info.find({"status":"single"})
// console.log(a.count())
let b=db.info.find({"name":"devarsh"})
db.info.updateMany({"name":"devarsh"},{$set:{"status":"mingle"}})
console.log(b)