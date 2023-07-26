ap1 = [1, 2, "3", 4, "5", 6];
console.log("ap1 = ", ap1);

console.log("size of ap1 is = ", ap1.length);

console.log("ap1[1] = ", ap1[1]);
console.log("ap1[4] = ", ap1[4]);

ap1.push(10);
console.log("ap1 after push() ", ap1);

ap1.pop();
console.log("ap1 after pop()", ap1);

// concate
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log("a1 = ", a1);
console.log("a2 = ", a2);
console.log("concate ap1ay a3 = ", a3);

// flat
const ap11 = [0, 1, 2, [3, 4]];
console.log(ap11.flat());

const ap12 = [0, 1, 2, [[[3, 4]]]];
console.log(ap12.flat(2));

// slice
console.log("slice");
const a = [1, 2, "3", 4.67, 5, 0.896, "one", 8, "tata"];
console.log(a);
console.log(a.slice(1, 4));
console.log(a.slice(-3));
console.log(a.slice(3, 6));
console.log(a.slice(4, -1));

// splice
console.log("splice");
const a9 = [0, 3, "darsh", 9.08];
a9.splice("splice => ", 0, "one");
console.log(a9);

// unshift
const p1 = ["Banana", "Orange", "Apple", "Mango"];
p1.unshift("Lemon");
console.log("p1 = ", p1);

// join

console.log("join");
const ele = ["1", "2", "3", "4", "5"];
console.log(ele.join("-"));

// delete
console.log("delete");
const emp = {
  fname: "darsh",
  lname: "patel",
};
console.log("emp = ", emp.fname);
delete emp.fname;
console.log("emp = ", emp.fname);

// object
console.log("object");
let data = {
  name: "darsh",
  age: 22,
  gender: "Male",
};
function detail(item) {
  console.log(item.name);
  console.log(item.age);
  console.log(item.gender);
}

// console.log(detail);
detail(data);
