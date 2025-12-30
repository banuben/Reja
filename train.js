// ********************   Event Loop & Callback   ******************** //
console.log("Train serverni boshlash");

console.log("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
  if(typeof a !== "number") callback("insert a number", null);
  else if(a <= 20) callback(null, list[0]);
  else if(a > 20 && a <= 30) callback(null, list[1]);
  else if(a > 30 && a <= 40) callback(null, list[2]);
  else if(a > 40 && a <= 50) callback(null, list[3]);
  else if(a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {           // setInterval da toxtovsiz javob qataradi
      callback(null, list[5]);
    }, 5000);   
 }
}


console.log("Passed here 0");
maslahatBering(65,(err, data) => {
  if(err) console.log("Error:", err);
  else {
    console.log("Javob:", data);
  }
});
console.log("Passed here 1");


// *****************  Asynchronous Functions  ***************** //
// async function maslahatBering(a) {
//   if(typeof a !== "number") throw new Error("insert a number");
//   else if(a <= 20) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//     // setTimeout(function () {
//     //   return list[5];
//     // }, 5000);   
//  }
// }

// // Call with then/catch
// console.log("Passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob:", data);
// })
//   .catch((err) => {
//     console.log("Error:", err);
// });

// console.log("Passed here 1");


// // Call with async/await
// async function run() {
//   let javob = await maslahatBering(20);  
//   console.log("Javob:", javob);
//   javob = await maslahatBering(30);
//   console.log("Javob:", javob);
//   javob = await maslahatBering(41);
//   console.log("Javob:", javob);
// }
// run();



// // Async da promise bn setTimeout ishlatish
// async function maslahatBering(a) {
//   if(typeof a !== "number") throw new Error("insert a number");
//   else if(a <= 20) return list[0];
//   else if(a > 20 && a <= 30) return list[1];
//   else if(a > 30 && a <= 40) return list[2];
//   else if(a > 40 && a <= 50) return list[3];
//   else if(a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {           // setInterval bn ishlatilsa faqat 1marta ishlaydi, callback da takrorlanadi
//         resolve(list[5]);
//       }, 5000);
//     });
//  }          
// }
