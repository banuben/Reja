/* TASK E: 

Shunday function tuzing, u bitta string argumentni qabul qilib 
osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh" */


function getReverse(str) {
  let result = "";

  for (const char of str) {
    result = char + result;
  }

  return result;
}

console.log(getReverse("hello")); // olleh
console.log(getReverse("salom")); // molas
console.log(getReverse("xayr")); // ryax





// /* TASK D : 
// Shunday function tuzing, u 2ta string parametr ega bolsin, 
// hamda agar har ikkala string bir hil harflardan iborat bolsa true 
// aks holda false qaytarsinMASALAN checkContent("mitgroup", "gmtiprou") 
// return qiladi true; */

// // with Map
// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const map = new Map();

//   for (const c of str1) {
//     map.set(c, (map.get(c) || 0) + 1);
//   }

//   for (const c of str2) {
//     if (!map.has(c) || map.get(c) === 0) return false;
//     map.set(c, map.get(c) - 1);
//   }

//   return true;
// }


// console.log(checkContent("mitgroup", "gmtiprou")); // true
// console.log(checkContent("salom", "annyong"));      // false
// console.log(checkContent("what", "htaw"));      // true









// // MIT C TASK
// /*  Shunday class tuzing tuzing nomi Shop, 
// va uni constructoriga 3 hil mahsulot pass bolsin, 
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() 
// return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
// return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // hozirgi vaqtni olish uchun yordamchi method
//   getTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, "0");
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     return `hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
//   }

//   sotish(mahsulot, son) {
//     if (this[mahsulot] >= son) {
//       this[mahsulot] -= son;
//       console.log(`${this.getTime()}da ${son}ta ${mahsulot} sotildi`);
//     } else {
//       console.log(`${this.getTime()}da ${mahsulot} yetarli emas`);
//     }
//   }

//   qabul(mahsulot, son) {
//     this[mahsulot] += son;
//     console.log(`${this.getTime()}da ${son}ta ${mahsulot} qabul qilindi`);
//   }
// }



// const shop = new Shop(4, 5, 2);

// console.log(shop.qoldiq());

// shop.sotish("non", 3);
// shop.qabul("cola", 4);

// console.log(shop.qoldiq());


















// // MIT B-TASK

// // function countDigits(str) {
// //   let count = 0;

// //   for (const char of str) {
// //     if (char >= "0" && char <= "9") {
// //       count++;
// //     }
// //   }

// //   return count;
// // }

// function countDigits(str) {
//   return [...str].filter(char => char >= "0" && char <= "9").length;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9")); //7
// console.log(countDigits("sh3546sg09dfef787fdsf87f"));  //11
// console.log(countDigits("hs897dsf87dsf78fd7f8e7df899e87f")); //15







// // MIT  A-TASK
// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countLetter("e", "engineer"));
// console.log(countLetter("a", "mahalla"));
// console.log(countLetter("e", "kerak"));




// // ********************   Event Loop & Callback   ******************** //
// console.log("Train serverni boshlash");

// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bolgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if(typeof a !== "number") callback("insert a number", null);
//   else if(a <= 20) callback(null, list[0]);
//   else if(a > 20 && a <= 30) callback(null, list[1]);
//   else if(a > 30 && a <= 40) callback(null, list[2]);
//   else if(a > 40 && a <= 50) callback(null, list[3]);
//   else if(a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {           // setInterval da toxtovsiz javob qataradi
//       callback(null, list[5]);
//     }, 5000);   
//  }
// }


// console.log("Passed here 0");
// maslahatBering(65,(err, data) => {
//   if(err) console.log("Error:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("Passed here 1");


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
