console.log("Web Serverni boshlash");
const express = require('express');
const app = express();


const fs = require('fs');   // Fayl tizimi moduli, fayllar bilan ishlash uchun

let user;  
fs.readFile("database/user.json", "utf-8", (err, data) => {  // user.json faylini o'qib olamiz
  if(err){
    console.log("Error:", err);
} else {
    user = JSON.parse(data);  // O'qilgan ma'lumotni JSON formatiga o'tkazamiz
}
});


// MongoDB chaqirish
const db = require('./server').db(); // server.js faylidan MongoDB mijozini chaqiramizß



// 1 : Kirish code 
app.use(express.static('public')); // public folderni statik fayllar uchun ishlatamiz
app.use(express.json()); // JSON formatdagi so'rovlarni qabul qilish uchun
app.use(express.urlencoded({ extended: true })); // URL-encoded so'rovlarni qabul qilish uchun, 
                                                // html dan keladigan malumotlarni qabul qilish uchun




// 2 : Session code


// 3 : Views code
app.set("views", "views"); // views papkasini shablonlar uchun sozlaymiz
app.set("view engine", "ejs"); // EJS shablon dvigatelini sozlaymiz, BSSR(Backend Server Side Rendering) uchun



// 4 : Routing code
// app.get("/hello", function(req, res){    // root ga so'rov kelganda
//   res.end(`<h1 style="background: red">Hello World by Bonu</h1>`);  // javob qaytaramiz
// });

// app.get("/gift", function(req, res){    // /gift ga so'rov kelganda
//   res.end(`<h1>Siz sovgalar sahifasidasiz!</h1>`);  
// });

app.post("/create-item", (req, res) => {
  console.log('User entered /create-item');
  // console.log(req.body);  // kelgan malumotni konsolga chiqaramiz
  const new_reja = req.body.reja; // formadan kelgan reja maydonini olamiz
  db.collection('plans').insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
    // if (err) {
    //   console.log(err);
    //   res.end("Xatolik yuz berdi!");
    // } else {
    //   res.end('Muvaffaqiyatli yaratildi!');
    // }
  // res.json({ status: "Muvaffaqiyatli yaratildi" }); // JSON formatda javob qaytaramiz
  });
});

app.get('/author', (req, res) => {
  res.render("author",{user:user}); // views papkasidagi author.ejs shablonini render qilamiz
});

app.get("/", function(req, res){
  console.log('User entered /');
  db.collection('plans')
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong!");
    } else {
      // console.log(data);
      res.render("reja", {items: data});  // views papkasidagi reja.ejs shablonini render qilamiz
    }
  });
});


//   res.render("reja");  // views papkasidagi reja.ejs shablonini render qilamiz
// });

module.exports = app; // app ni tashqi fayllarda ishlatish uchun eksport qilamiz


