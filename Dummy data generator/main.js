import express from "express"
import mongoose from "mongoose";
import { info } from "./models/info.js";
const app = express()//creating an express app
app.use(express.static('public'))
// app.set('view engine','ejs')
const port = 3000;
const conn = await mongoose.connect('mongodb://localhost:27017/Dummy');
app.post('/', async (req, res) => {
  let a = await conn.connection.listCollections();
  let b = a.map(e => e.name)
  if (b.includes("infos")) {
    await mongoose.connection.db.dropCollection('infos')
    res.send("data deleted")
  }
  else {
    let name = ['Devarsh', 'Shivam', 'Harry','Krishna','Krrish','Bhupendar Jogi','Punnet Superstar'];
    let course = ['Python', 'Java', 'C++'];
    let price = [40000, 35000, 25000]
    var realp = 0;
    var i=1;
    while (i <= 10) {
      let n = name[randomm()];
      console.log(n)
      let c = course[random()];
      if (c == 'Java') {
        realp = 40000
      }
      else if (c == 'Python') {
        realp = 35000;
      }
      else {
        realp = 25000;
      }
      let num=randomm();
      let desc=Boolean;
      if(num%2==0){
        desc=true;
      }
      else{
        desc=false;
      }
      let Info = new info({ name: n, course: c, price: realp, worth: desc })
      await Info.save();
      i++;
    }
    res.send("data saved")
  }
})
app.listen(port, () => {
  console.log("app is running")
})
let random = () => {
  let min = 0;
  let max = 2;
  let rand = Math.floor(Math.random() * (max - min) + min)
  return rand;
}
let randomm = () => {
  let min = 0;
  let max = 8;
  let rand = Math.floor(Math.random() * (max - min) + min)
  return rand;
}