const nameArray = ["Toshi", "Arai", "Juan"];

const nameArray_map = nameArray.map((name)=>{
  return name;
})

console.log(nameArray_map);


nameArray.map((name, index) => console.log(`${index}番目は、${name}です`));

const numArray = [1, 2, 3, 4, 5];
const new_numArray = numArray.filter((num) => {
  return num % 2 == 1;
})

console.log(new_numArray);
