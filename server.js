const http = require('http');  // Node.js ning http modulini chaqiramiz

const mongodb = require('mongodb'); // MongoDB moduli

let db;
const connectionString = 'mongodb+srv://BB_db_user:hNHw0s1c3j0er4yD@cluster0.40egljy.mongodb.net/Reja?appName=Cluster0'; // MongoDB ulanish satri

mongodb.connect(
  connectionString, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, 
(err, client) => {
  if (err) 
    console.log("MongoDB ga ulanishda xatolik yuz berdi:", err);
  else {
    console.log("MongoDB ga muvaffaqiyatli ulandi!");
    module.exports = client; // MongoDB mijozini eksport qilamiz

    const app = require('./app');  // app.js faylini chaqiramiz
    const server = http.createServer(app);   // http serverini yaratamiz
    let PORT = 3000;
    server.listen(PORT, function(){           // serverni belgilangan portda ishga tushiramiz
      console.log(
        `Server ushbu manzilda ishga tushdi: http://localhost:${PORT}, http://locahost:${PORT}`
      );
    });
  }
});


// const server = http.createServer(app);   // http serverini yaratamiz
// let PORT = 3000;
// server.listen(PORT, function(){           // serverni belgilangan portda ishga tushiramiz
//   console.log(`Server ushbu manzilda ishga tushdi: http://localhost:${PORT}, http://locahost:${PORT}`);
// });

