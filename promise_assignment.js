// let promise = new Promise(function(num, resolve, reject) {
//   // do a thing, possibly async, then…
//
//   if (!num || num > 10) {
//     resolve("Stuff worked!");
//   } else {
//     reject(Error("It broke"));
//   }
// }).then(res => {
//   console.log(res);
// });
// promise(9);
// // console.log(promise);

//////part 1/////////
// function testNum(num) {
//   return new Promise((resolve, reject) => {
//     resolve(num > 10);
//   });
// }
//
// console.log(testNum(9));

//////Part 2/////////

// function whisperShout(str) {
//   return new Promise(resolve => {
//     console.log(str.toLowerCase());
//     setTimeOut(() => resolve(str), 3000);
//   }).then(result => {
//     console.log(result.toUpperCase());
//   });
// }
// whisperShout("promises");

//second way

// function whisperShout2(str) {
//   return new Promise((resolve, reject) => {
//     setTimeOut(() => {});
//   });
// }

/////////////////// PArt 3

function waitFact(arr) {
  let ind = 0;
  let interval = setInterval(() => {
    if (ind < arr.length) {
      new Promise((resolve, reject) => {
        console.log(arr[ind]);
        ind++;
        resolve();
      });
    } else {
      clearInterval(interval);
    }
  }, 1000);
}
waitFact([1, 2, 3]);
