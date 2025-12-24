console.log("Web Serverni boshlash");
const express = require('express');
const app = express();
const http = require('http');  // Node.js ning http modulini chaqiramiz

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

app.get("/", function(req, res){    // root ga so'rov kelganda
  res.render("harid");  // views papkasidagi harid.ejs shablonini render qilamiz
});



const server = http.createServer(app);   // http serverini yaratamiz
let PORT = 3000;
server.listen(PORT, function(){           // serverni belgilangan portda ishga tushiramiz
  console.log(`Server http://localhost:${PORT} manzilda ishga tushdi`);
});

