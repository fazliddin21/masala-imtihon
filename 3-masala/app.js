let arr = "1java2script3 5deve6lo4per";
function x(date) {
  let newArr = [];
  let numArr = [];
  for (let i = 0; i < date.length; i++) {
    if (isNaN(Number(date[i]))) {
      numArr.push(Number(date[i]));
    }
    if (arr[i] !== " ") {
      newArr.push(date[i]);
    }
  }
  return { newArr: newArr, numArr: numArr };
}
let str = x(arr);
console.log(str);
