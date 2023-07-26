console.log("let = ");
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);

let a = 10;
a = 20;
a = a + 5;
console.log("a = ", a);

console.log("const ");

const RATE = 0.1;
// RATE = 0.2; //error
console.log(RATE);

console.log("arrow function");

let show = (a, b) => {
  console.log(a, b);
};
show(100, 300, 23, 354);

//
console.log("spred");
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);
console.log(myFunction(-1, ...args, 2, ...[3]));

// for of
console.log("for of");
const s1 = [1, 2, 3, "onr", "zero", true];

for (const element of s1) {
  console.log(element);
}

// map

console.log("map");
let m1 = new Map();
m1.set("one", 1);
m1.set("two", 2);
m1.set("three", 3);
m1.set("three", 4);
m1.set("four", 4);
m1.set("four", 4);

console.log(m1.size);
console.log(m1);

// set
console.log("set");
const s2 = new Set();
s2.add(2);
s2.add("one");
s2.add("tata");
s2.add("tata");

const obj = {
  a: 1,
  b: 2,
};
s2.add(obj);
console.log("s2", s2);

ans = s2.has(1);
console.log(ans);

console.log(s2.size);



