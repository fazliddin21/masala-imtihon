let arr = ["i", "Study", "Javascript", "Right", "Now"];

function delette(arr, del) {
  return arr.filter(fazliddinbey => fazliddinbey !== del);
}

let fazikZdes = delette(arr, "Right");

console.log(fazikZdes); 
