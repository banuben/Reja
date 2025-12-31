console.log("Web Serverni boshlash");
const express = require('express');
const app = express();
const http = require('http');  // Node.js ning http modulini chaqiramiz

const fs = require('fs');   // Fayl tizimi moduli, fayllar bilan ishlash uchun

let user;  
fs.readFile("database/user.json", "utf-8", (err, data) => {  // user.json faylini o'qib olamiz
  if(err){
    console.log("Error:", err);
} else {
    user = JSON.parse(data);  // O'qilgan ma'lumotni JSON formatiga o'tkazamiz
}
});





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
  console.log(req.body);  // kelgan malumotni konsolga chiqaramiz
  res.json({ status: "Muvaffaqiyatli yaratildi" }); // JSON formatda javob qaytaramiz
});

app.get('/author', (req, res) => {
  res.render("author",{user:user}); // views papkasidagi author.ejs shablonini render qilamiz
});

app.get("/", function(req, res){    // root ga so'rov kelganda
  res.render("reja");  // views papkasidagi reja.ejs shablonini render qilamiz
});



const server = http.createServer(app);   // http serverini yaratamiz
let PORT = 3000;
server.listen(PORT, function(){           // serverni belgilangan portda ishga tushiramiz
  console.log(`Server ushbu manzilda ishga tushdi: http://localhost:${PORT}, http://locahost:${PORT}`);
});

